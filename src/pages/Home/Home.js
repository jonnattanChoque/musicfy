import React from 'react';
import { Button } from 'semantic-ui-react';
import { Auth } from '../../api';

const auth = new Auth();

export function Home() {
  return (
    <div>
        <h1>Home Screen</h1>
        <Button onClick={auth.logout}>Cerrar sesión</Button>
    </div>
  )
}
