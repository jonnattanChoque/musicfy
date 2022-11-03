import React, {useState} from 'react'
import { Button, Form, Icon } from 'semantic-ui-react';

import { User } from "../../../api";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./FormProfileName.data";

const user = new User();

export function FormProfileName(props) {
    const {onClose} = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),   
        onSubmit: async (formData) => {
            try {
                await user.updateProfileName(formData.displayName);
                onClose();
            } catch (error) {
                console.log(error);
            }
        }
    })
    
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input name="displayName" type="text" placeholder="Apodo" 
            value={formik.values.displayName} onChange={formik.handleChange} error={formik.errors.displayName} />
            <Button type='submit' primary fluid loading={formik.isSubmitting} >Actualizar</Button>
        </Form>
    )
}
