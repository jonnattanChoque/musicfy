import React, {useState, useCallback, useEffect} from 'react'
import "./NewAlbumForm.scss";
import { noImage } from "../../../assets"
import {Form, Image, Button} from "semantic-ui-react";
import { initialValues, validationSchema} from "./NewAlbumForm.data";
import { Storage, Album, Artist } from '../../../api';
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { v4 as uuidv4} from "uuid";

const storage = new Storage();
const album = new Album();
const artist = new Artist();

export function NewAlbumForm(props) {
    const {onClose} = props;
    const [image, setImage] = useState(null);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        (async () => {
            const artists = await artist.getArtists();
            const newData = artists.map(artist => {
                return {
                    key: artist.id,
                    value: artist.id,
                    text: artist.name
                }
            })
            setArtists(newData);
            console.log(artists);
        })()
    }, [])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(URL.createObjectURL(file));
        formik.setFieldValue("image", file);
    });

    const {getRootProps, getInputProps} = useDropzone({ onDrop });

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formData) => {
            try {
                const response = await storage.uploadFile(formData.image, "albums", uuidv4());
                const url = await storage.getUrlFile(response.metadata.fullPath);
                await album.createAlbum(formData.name, url, formData.artist);
                onClose();
            } catch (error) {
                alert(error);
            }
        }
    })

    return (
        <Form className='new-album-form' onSubmit={formik.handleSubmit}>
            <div className='new-album-form__content'>
                <div {...getRootProps()} className={classNames("new-album-form__content-image", {
                    error: formik.errors.image
                })}>
                    <input {...getInputProps()} />
                    <Image src={image || noImage} className={classNames({ full: image})}/>
                </div>
                <div className='new-album-form__content-inputs'>
                    <Form.Input name="name" type="text" placeholder="Nombre del album" 
                    value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name}/>
                    <Form.Dropdown name="artist" placeholder="Nombre del artista" fluid search selection options={[...artists]} 
                    value={formik.values.artist} onChange={(_, data) => formik.setFieldValue("artist", data.value)} error={formik.errors.artist}/>
                </div>
            </div>
            <Button type='submit' primary fluid loading={formik.isSubmitting}>Crear album</Button>
        </Form>
    )
}