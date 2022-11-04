import React, {useState, useEffect} from 'react';
import "./Album.scss";
import {InfoAlbum} from "../../components/Albums";
import { useParams } from "react-router-dom"
import { Album as AlbumController, Song } from "../../api";
import { ListSongs } from '../../components/Song';

const albumController = new AlbumController();
const songController = new Song();

export function Album() {
  const {id} = useParams();
  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbum(id);
        setAlbum(response);
      } catch (error) {
        alert(error);
      }
    })()
  }, [id]);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await songController.getSongsByAlbum(id);
        setSongs(response);
      } catch (error) {
        alert(error);
      }
    })()
  }, [id]);

  if (!album) return null;

  return (
    <div className='album-page'>
      <InfoAlbum album={album} />
      
      <div className='album-page__slider'>
        <h2>Canciones</h2>
        <ListSongs songs={songs} miniature={album.image} />
      </div>
    </div>
  )
}
