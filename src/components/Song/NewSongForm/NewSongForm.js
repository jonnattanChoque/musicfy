import React, {useState, useCallback, useEffect} from 'react';
import "./NewSongForm.scss";
import { Button, Form, Icon } from 'semantic-ui-react';
import { initialValues, validationSchema} from "./NewSongForm.data";
import { Storage, Album, Song } from '../../../api';
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { v4 as uuidv4} from "uuid";


const storage = new Storage();
const album = new Album();
const song = new Song();

export function NewSongForm(props) {
    const {onClose} = props;
    const [songName, setSongName] = useState();
    const [albums, setAlbums] = useState([]);
    

    useEffect(() => {
        (async () => {
            const albums = await album.getAlbums();
            const newData = albums.map(album => {
                return {
                    key: album.id,
                    value: album.id,
                    text: album.name
                }
            })
            setAlbums(newData);
        })()
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSongName(file.name);
        formik.setFieldValue("file", file);
    });

    const {getRootProps, getInputProps} = useDropzone({ onDrop });

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formData) => {
            try {
                const response = await storage.uploadFile(formData.file, "songs", uuidv4());
                const url = await storage.getUrlFile(response.metadata.fullPath);
                await song.createSong(formData.name, url, formData.album);
                onClose();
            } catch (error) {
                alert(error);
            }
        }
    })

    return (
        <Form className='new-song-form' onSubmit={formik.handleSubmit}>
            <Form.Input name="name" type="text" placeholder="Nombre de la canción" 
            value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name}/>

            <Form.Dropdown name="album" placeholder="Nombre del album" fluid search selection options={[...albums]} 
            value={formik.values.album} onChange={(_, data) => formik.setFieldValue("album", data.value)} error={formik.errors.album}/>

            <div {...getRootProps()} className={classNames("new-song-form__file", {
                error: formik.errors.file
            })}>
                <Icon name="cloud upload"/>
                <div>
                    <p>Arrastra tu canción o has clic <span>aquí</span></p>
                    {songName && <p className='song-name'>{songName}</p>}
                </div>
                <input {...getInputProps()} />
            </div>
            
            <Button type='submit' primary fluid loading={formik.isSubmitting}>Subir canción</Button>
        </Form>
    )
}
