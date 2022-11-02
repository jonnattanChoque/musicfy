import React from 'react';
import { Button } from 'semantic-ui-react';
import "./AuthOptions.scss";

export function AuthOptions(props) {
  const { openLoginForm, openRegisterForm } = props;

  return (
    <div className='auth-options'>
        <h1>Millones de canciones gratis, aquí en Musicfy</h1>
        <Button className='register' primary onClick={openRegisterForm}>Registrate gratis</Button>
        <Button className='login' secondary onClick={openLoginForm}>Iniciar sesión</Button>
    </div>
  )
}
