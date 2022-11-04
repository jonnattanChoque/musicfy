import React, {useState, useEffect} from 'react';
import { Image } from 'semantic-ui-react';
import "./InfoAlbum.scss";
import { Artist } from "../../../api";
import { Link } from 'react-router-dom';

const artistController = new Artist();

export function InfoAlbum(props) {
    const {album: {name, image, artist}} = props;
    const [artistData, setArtistData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await artistController.getArtist(artist);
                setArtistData(response);
            } catch (error) {
                alert(error);
            }
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.album]);
        
    return (
        <div className='album-info'>
            <Image src={image} alt={name} />
            <div className='album-info__data'>
                <h1>{name}</h1>
                {artistData && 
                <p>De <Link to={`/artists/${artist}`}>{artistData.name}</Link></p>}
            </div>
        </div>
    )
}
