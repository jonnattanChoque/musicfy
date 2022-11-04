import React, {useState, useEffect} from 'react';
import "./Artist.scss";
import { useParams } from "react-router-dom"
import { Artist as ArtistController} from "../../api";
import { BannerArtist } from '../../components/Artist';

const artistController = new ArtistController()

export function Artist() {
  const {id} = useParams();
  const [artist, setArtist] = useState(null);

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

  if (!artist) return null;

  return (
    <div className='artist-page'>
      <BannerArtist artist={artist} />

      <div className='artist-page__slider'>
        <h2>Slider</h2>
      </div>
      
      <div className='artist-page__slider'>
        <h2>canciones</h2>
      </div>
    </div>
  )
}
