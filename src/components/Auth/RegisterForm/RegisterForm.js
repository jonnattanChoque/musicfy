import React, {useState} from 'react';
import "./RegisterForm.scss";
import { Button, Icon, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from "./RegisterForm.data";
import { Auth } from '../../../api';

const auth = new Auth();

export function RegisterForm(props) {
  const { openLoginForm, goBack } = props;
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await auth.registerUser(formData.email, formData.password);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className='register-form'>
        <h1>Empieza a escuchar música creando una cuenta gratis.</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Input type='text' placeholder="Correo" icon="mail outline" autoComplete="off" 
          name="email" onChange={formik.handleChange} value={formik.values.email}
          error={formik.errors.email}/>
          <Form.Input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" 
          icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={() => setShowPassword(!showPassword)} />} 
          name="password" onChange={formik.handleChange} value={formik.values.password}
          error={formik.errors.password}/>
          <Form.Input type='text' placeholder="Cuál es tu apodo?" icon="user circle outline" 
          name="username" onChange={formik.handleChange} value={formik.values.username}
          error={formik.errors.username} />
          <Button type='submit' primary fluid loading={formik.isSubmitting}>Continuar</Button>
        </Form>
        <div className='register-form__options'>
          <p onClick={goBack}>Volver</p>
          <p>Ya tienes cuenta? <span onClick={openLoginForm}>Iniciar sesión</span></p>
        </div>
    </div>
  )
}
