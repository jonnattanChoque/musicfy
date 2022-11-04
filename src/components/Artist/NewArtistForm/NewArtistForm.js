import React, {useCallback, useState } from 'react'
import { Button, Form, Image } from 'semantic-ui-react';
import "./NewArtistForm.scss";
import { noImage } from "../../../assets"
import { Storage, Artist } from '../../../api';
import { initialValues, validationSchema } from "./NewArtitsForm.data";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

const storage = new Storage();
const artist = new Artist();

export function NewArtistForm(props) {
    const {onClose} = props;
    const [image, setImage] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(URL.createObjectURL(file));
        formik.setFieldValue("file", file);
    });

    const {getRootProps, getInputProps} = useDropzone({ onDrop });

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formData) => {
            try {
                const response = await storage.uploadFile(formData.file, "artists", uuidv4());
                const url = await storage.getUrlFile(response.metadata.fullPath);
                await artist.createArtist(formData.name, url);
                onClose();
            } catch (error) {
                alert(error);
            }
        }
    })

    return (
        <Form className='new-artist-form' onSubmit={formik.handleSubmit}>
            <div {...getRootProps()} className={classNames("new-artist-form__banner", {
                error: formik.errors.file
            })}>
                <input {...getInputProps()} />
                <Image src={image || noImage} className={classNames({ full: image})}/>
            </div>

            <Form.Input name="name" type="text" placeholder="Nombre del artista" 
            value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name}/>
            <Button type='submit' primary fluid loading={formik.isSubmitting}>Crear artista</Button>
        </Form>
    )
}
