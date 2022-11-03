import React, {useState} from 'react'
import { Button, Form, Icon } from 'semantic-ui-react';

import { User } from "../../../api";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./FormProfileEmail.data";

const user = new User();

export function FormProfileEmail(props) {
    const {onClose} = props;
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),   
        validateOnChange: false,
        onSubmit: async (formData) => {
            try {
                await user.updateProfileEmail(formData.password, formData.newEmail);
                onClose();
            } catch (error) {
                console.log(error);
            }
        }
    })
    
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input name="newEmail" type="text" placeholder="Nuevo correo" 
            value={formik.values.newEmail} onChange={formik.handleChange} error={formik.errors.newEmail} />

            <Form.Input name="password" type={showPassword ? 'text' : 'password'} placeholder="Contraseña" 
            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={() => setShowPassword(!showPassword)} />}
            value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />
            
            <Button type='submit' primary fluid loading={formik.isSubmitting}>Actualizar</Button>
        </Form>
    )
}
