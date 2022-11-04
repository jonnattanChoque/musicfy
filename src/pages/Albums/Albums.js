import React, {useState, useEffect} from 'react';
import "./Albums.scss";
import { ListAlbum } from "../../components/Albums"

import { Album } from "../../api";

const album = new Album();

export function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await album.getAlbums();
      setAlbums(response);
    })();
  }, []);

  return (
    <div className='artists-page'>
      <h1>Albums</h1>
      <ListAlbum albums={albums}/>
    </div>
  )
}
