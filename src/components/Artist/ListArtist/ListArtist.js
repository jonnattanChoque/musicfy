import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import "./ListArtist.scss";
import { Link } from "react-router-dom";

export function ListArtist(props) {
    const {artists} = props;
    
    if(!artists || artists.length === 0) {
        return <Loader active inline="centered">Cargando artistas</Loader>
    }

    return (
        <Grid className='list-artists'>
            <Grid.Row columns={5}>
                {artists.map(artist => (
                    <Grid.Column key={artist.id} className='list-artists__artist'>
                        <Link to={`/artists/${artist.id}`}>
                            <div className='avatar images' style={{backgroundImage: `url('${artist.image}')`}} />
                            <p className='names'>{artist.name}</p>
                        </Link>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    )
}
