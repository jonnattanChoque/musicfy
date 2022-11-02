import React from 'react'
import { Button } from 'semantic-ui-react'

export function LoginForm(props) {
  const { openRegisterForm, goBack } = props;
  return (
    <div style={{backgroundColor: "#f3f3f3"}}>
        <h1>Login Form</h1>

        <Button primary onClick={openRegisterForm}>Registro</Button>
        <Button secondary onClick={goBack}>Atras</Button>
    </div>
  )
}
