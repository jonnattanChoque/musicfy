import React, {useState} from 'react'
import { Form, Icon } from 'semantic-ui-react';
import "./LoginForm.scss";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from "./LoginForm.data";
import { Auth } from '../../../api';

const auth = new Auth();

export function LoginForm(props) {
  const { openRegisterForm, goBack } = props;
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await auth.login(formData.email, formData.password);
      } catch (error) {
        alert(error);
      }
    }
  });

  return (
    <div className='login-form'>
      <h1>Música para todos</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input type='text' placeholder="Correo" icon="mail outline" 
          name="email" onChange={formik.handleChange} value={formik.values.email}
          error={formik.errors.email}/>
        <Form.Input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" 
          icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={() => setShowPassword(!showPassword)} />} 
          name="password" onChange={formik.handleChange} value={formik.values.password}
          error={formik.errors.password}/>
        <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>Iniciar sesión</Form.Button>
      </Form>
      <div className='login-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>¿No tienes cuenta? <span onClick={openRegisterForm}>Regístrate</span></p>
      </div>
    </div>
  )
}
