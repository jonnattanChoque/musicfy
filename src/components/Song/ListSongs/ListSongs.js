import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import "./ListSongs.scss";

export function ListSongs(props) {
    const {songs} = props;

    if(!songs || songs.length === 0) {
        return <p className='no-songs'>No hay canciones</p>
    }

    return (
        <Table inverted className='list-songs'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Título</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {songs.map((song, index) => (
                    <Table.Row key={index}>
                        <Table.Cell collapsing>
                            <Icon name='play circle outline' />
                        </Table.Cell>
                        <Table.Cell>
                            <p>{song.name} {song.albumName && <span> - {song.albumName}</span>}</p>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}