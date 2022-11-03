import React, {useState} from 'react'
import { Button, Form, Icon } from 'semantic-ui-react';

import { User } from "../../../api";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./FormProfilePassword.data";

const user = new User();

export function FormProfilePassword(props) {
    const {onClose} = props;
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setRepeatShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),   
        onSubmit: async (formData) => {
            try {
                await user.updateProfilePassword(formData.oldPassword, formData.password);
                onClose();
            } catch (error) {
                alert(error);
            }
        }
    })
    
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input name="oldPassword" type={showOldPassword ? 'text' : 'password'} placeholder="Contraseña actual" 
            icon={<Icon name={showOldPassword ? 'eye slash' : 'eye'} link onClick={() => setShowOldPassword(!showOldPassword)} />}
            value={formik.values.oldPassword} onChange={formik.handleChange} error={formik.errors.oldPassword} />

            <Form.Input name="password" type={showPassword ? 'text' : 'password'} placeholder="Contraseña nueva" 
            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={() => setShowPassword(!showPassword)} />}
            value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />
            
            <Form.Input name="repeatPassword" type={showRepeatPassword ? 'text' : 'password'} placeholder="Repetir contraseña" 
            icon={<Icon name={showRepeatPassword ? 'eye slash' : 'eye'} link onClick={() => setRepeatShowPassword(!showRepeatPassword)} />}
            value={formik.values.repeatPassword} onChange={formik.handleChange} error={formik.errors.repeatPassword} />
            <Button type='submit' primary fluid loading={formik.isSubmitting}>Actualizar</Button>
        </Form>
    )
}
