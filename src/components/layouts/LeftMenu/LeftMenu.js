import React from 'react'
import "./LeftMenu.scss";
import { Menu, Icon } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export function LeftMenu() {
    const {pathname} = useLocation();

    const isCurrentPage = (path) => {
        return path === pathname;
    }

    return (
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
                <Menu.Item link onClick={() => console.log('nueva cancion')}> 
                    <Icon name='plus' /> Nueva canción 
                </Menu.Item>
                <Menu.Item link onClick={() => console.log('nuevo album')}> 
                    <Icon name='plus' /> Crear album 
                </Menu.Item>
                <Menu.Item link onClick={() => console.log('nuevo artista')}> 
                    <Icon name='plus' /> Nuev artista 
                </Menu.Item>
            </Menu>
        </div>
    )
}
