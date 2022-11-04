import React, {useEffect, useState} from 'react';
import "./Home.scss";
import { bannerHome } from "../../assets";
import { Button } from 'semantic-ui-react';
import { Auth, Artist, Album, Song } from '../../api';
import { SliderCustom } from "../../components/Shared"
import { ListSongs } from '../../components/Song/ListSongs/ListSongs';

const auth = new Auth();
const artist = new Artist();
const album = new Album();
const song = new Song();

export function Home() {
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      (async () => {
        const response = await artist.getLastArtist();
        setArtists(response);
      })();
    }, []);

    useEffect(() => {
      (async () => {
        const response = await album.getLastAlbums();
        setAlbums(response);
      })();
    }, []);

    useEffect(() => {
      (async () => {
        const response = await song.getLastSongs();
        setSongs(response);
      })();
    }, []);

  return (
    <div className='home-page'>
      <div className='home-page__banner' style={{background: `url(${bannerHome})`}} />
      <div className='home-page__slider'>
        <h2>Últimos artistas</h2>
        {artists && <SliderCustom data={artists} basePath="artists" />}
      </div>

      <div className='home-page__slider'>
        <h2>Últimos albums</h2>
        {albums && <SliderCustom data={albums} basePath="albums" />}
      </div>

      <div className='home-page__slider'>
        <h2>Últimos canciones</h2>
        {albums && <ListSongs songs={songs} />}
      </div>

      <Button onClick={auth.logout}>Cerrar sesión</Button>
    </div>
  )
}
