import React, {useState, useEffect} from 'react';
import "./Album.scss";
import {InfoAlbum} from "../../components/Albums";
import { useParams } from "react-router-dom"
import { Album as AlbumController} from "../../api";

const albumController = new AlbumController()

export function Album() {
  const {id} = useParams();
  const [album, setAlbum] = useState(null);

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

  if (!album) return null;

  return (
    <div className='album-page'>
      <InfoAlbum album={album} />
      
      <div className='album-page__slider'>
        <h2>canciones</h2>
      </div>
    </div>
  )
}
