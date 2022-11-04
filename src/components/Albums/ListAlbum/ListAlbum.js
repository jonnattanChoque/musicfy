import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import "./ListAlbum.scss";
import { Link } from "react-router-dom";

export function ListAlbum(props) {
    const {albums} = props;
    
    if(!albums || albums.length === 0) {
        return <Loader active inline="centered">Cargando Albums</Loader>
    }

    return (
        <Grid className='list-albums'>
            <Grid.Row columns={5}>
                {albums.map(album => (
                    <Grid.Column key={album.id} className='list-albums__album'>
                        <Link to={`/albums/${album.id}`}>
                            <div className='avatar images' style={{backgroundImage: `url('${album.image}')`}} />
                            <p className='names'>{album.name}</p>
                        </Link>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    )
}
