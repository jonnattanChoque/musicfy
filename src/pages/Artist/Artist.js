import React, {useState, useEffect} from 'react';
import "./Artist.scss";
import { useParams } from "react-router-dom"
import { Artist as ArtistController, Album} from "../../api";
import { BannerArtist } from '../../components/Artist';
import { SliderCustom } from '../../components/Shared';

const artistController = new ArtistController();
const albumController = new Album();

export function Artist() {
  const {id} = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(id);
        setArtist(response);
      } catch (error) {
        alert(error);
      }
    })()
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbumsByArtist(id);
        setAlbums(response);
      } catch (error) {
        alert(error);
      }
    })()
  }, [id]);

  if (!artist) return null;

  return (
    <div className='artist-page'>
      <BannerArtist artist={artist} />

      <div className='artist-page__slider'>
        <h2>Albums</h2>
        <SliderCustom data={albums} basePath="albums" />
      </div>
      
      <div className='artist-page__slider'>
        <h2>canciones</h2>
      </div>
    </div>
  )
}
