import React from 'react';
import { Button } from 'semantic-ui-react';

export function AuthOptions(props) {
  const { openLoginForm, openRegisterForm } = props;

  return (
    <div style={{backgroundColor: "#000"}}>
        <h1>AuthOptions</h1>
        <Button primary onClick={openRegisterForm}>Registro</Button>
        <Button secondary onClick={openLoginForm}>Login</Button>
    </div>
  )
}
