import React, {useState} from 'react';
import "./Profile.scss";
import { Button } from 'semantic-ui-react';

import { AvatarUpdate, FormProfileName, FormProfileEmail, FormProfilePassword } from "../../components/Profile";
import { Modal } from "../../components/Shared";
import { User } from "../../api";

const user = new User();

export function Profile() {
  const { displayName, email } = user.getUser();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  
  const onCloseModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const onShowModal = (type) => {
    switch (type) {
      case "displayName":
        setTitleModal("Actualizar apodo");
        setContentModal(<FormProfileName onClose={onCloseModal} />);
        setShowModal(true);
        break;
      case "email":
        setTitleModal("Actualizar correo");
        setContentModal(<FormProfileEmail onClose={onCloseModal} />);
        setShowModal(true);
        break;
      case "password":
        setTitleModal("Actualizar contraseña");
        setContentModal(<FormProfilePassword onClose={onCloseModal} />);
        setShowModal(true);
        break;
      default:
        setTitleModal("");
        setContentModal(null);
        setShowModal(false);
        break;
    }
    
  }

  return (
    <>
    <div className='profile'>
      <h1>Perfil</h1>

      <div className='profile__block first_center'>
        <div>
          <AvatarUpdate />
        </div>
      </div>

      <div className='profile__info'>
        <h2>Información de usuario</h2>

        <div className='profile__block'>
          <p>Apodo: <span>{displayName || "Sin nombre"}</span></p>
          <Button onClick={() => onShowModal('displayName')}>Actualizar</Button>
        </div>

        <div className='profile__block'>
          <p>Correo: <span>{email}</span></p>
          <Button onClick={() => onShowModal('email')}>Actualizar</Button>
        </div>

        <div className='profile__block'>
          <p>Contraseña: <span>*** *** *** ***</span></p>
          <Button onClick={() => onShowModal('password')}>Actualizar</Button>
        </div>
      </div>
    </div>
    <Modal show={showModal} setShow={onCloseModal} 
    title={titleModal} size='small' children={contentModal} />
    </>
  )
}
