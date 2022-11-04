import React, {useState} from 'react'
import "./LeftMenu.scss";
import { Menu, Icon } from 'semantic-ui-react';
import {Modal} from '../../Shared';
import {NewArtistForm} from '../../Artist';
import { Link, useLocation } from 'react-router-dom';
import { NewAlbumForm } from '../../Albums';
import { NewSongForm } from '../../Song/';

export function LeftMenu() {
    const {pathname} = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [contentModal, setContentModal] = useState(null);

    const onCloseModal = () => {
        setShowModal(false);
        setTitleModal("");
        setContentModal(null);
    };

    const isCurrentPage = (path) => {
        return path === pathname;
    }

    const onShowModal = (type) => {
        switch (type) {
          case "artist":
            setTitleModal("Nuevo artista");
            setContentModal(<NewArtistForm onClose={onCloseModal} />);
            setShowModal(true);
            break;
          case "album":
            setTitleModal("Nuevo album");
            setContentModal(<NewAlbumForm onClose={onCloseModal} />);
            setShowModal(true);
            break;
          case "song":
            setTitleModal("Nueva canción");
            setContentModal(<NewSongForm onClose={onCloseModal} />);
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
        <div className='left-menu'>
            <Menu secondary vertical fluid>
                <Menu.Item as={Link} to="/" active={isCurrentPage("/")}> 
                    <Icon name='home' /> Inicio 
                </Menu.Item>
                    <Menu.Item as={Link} to="/artists" active={isCurrentPage("/artists")}> 
                    <Icon name='users' /> Artistas 
                </Menu.Item>
                    <Menu.Item as={Link} to="/albums" active={isCurrentPage("/albums")}> 
                    <Icon name='window maximize outline' /> Albumes 
                </Menu.Item>
            </Menu>

            <Menu secondary vertical fluid>
                <Menu.Item link onClick={() => onShowModal('artist')}> 
                    <Icon name='plus' /> Nuev artista 
                </Menu.Item>
                <Menu.Item link onClick={() => onShowModal('album')}> 
                    <Icon name='plus' /> Nuevo album 
                </Menu.Item>
                <Menu.Item link onClick={() => onShowModal('song')}> 
                    <Icon name='plus' /> Nueva canción 
                </Menu.Item>
            </Menu>
        </div>
        <Modal show={showModal} setShow={onCloseModal} title={titleModal} children={contentModal} />
        </>
    )
}
