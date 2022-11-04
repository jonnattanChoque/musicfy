import React, {useState, useEffect} from 'react';
import "./Artist.scss";
import { useParams } from "react-router-dom"
import { Artist as ArtistController, Album, Song} from "../../api";
import { BannerArtist } from '../../components/Artist';
import { SliderCustom } from '../../components/Shared';
import { ListSongs } from '../../components/Song';

const artistController = new ArtistController();
const albumController = new Album();
const songController = new Song();

export function Artist() {
  const {id} = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [songs, setSongs] = useState(null);

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

  useEffect(() => {
    if(albums) {
      (async () => {
        try {
          let data = [];
          for await (const album of albums) {
            const response = await songController.getSongsByAlbum(album.id);
            const dataTemp = response.map((song) => {
              return {
                ...song,
                albumName: album.name,
                albumImage: album.image
              }
            });
            data.push(...dataTemp);
          }
          setSongs(data);
          
        } catch (error) {
          alert(error);
        }
      })()
    }
  }, [albums]);

  if (!artist) return null;

  return (
    <div className='artist-page'>
      <BannerArtist artist={artist} />

      <div className='artist-page__slider'>
        <h2>Albums</h2>
        <SliderCustom data={albums} basePath="albums" />
      </div>
      
      <div className='artist-page__slider'>
        <h2>Canciones</h2>
        <ListSongs songs={songs} />
      </div>
    </div>
  )
}
