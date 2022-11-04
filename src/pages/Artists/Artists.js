import React, {useState, useEffect} from 'react';
import "./Artists.scss";
import { ListArtist } from "../../components/Artist"

import { Artist } from "../../api";

const artist = new Artist();

export function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await artist.getArtists();
      setArtists(response);
    })();
  }, []);

  return (
    <div className='artists-page'>
      <h1>Artistas</h1>
      <ListArtist artists={artists}/>
    </div>
  )
}
