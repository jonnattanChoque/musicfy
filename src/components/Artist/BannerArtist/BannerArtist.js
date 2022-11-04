import React from 'react'
import "./BannerArtist.scss";

export function BannerArtist(props) {
  const {artist: {name, image} } = props;
  
  return (
    <div className='artist-banner'>
      <div className='artist-banner__image' style={{ backgroundImage: `url(${image})`}}>
        <span>Artista</span>
        <h1>{name}</h1>
      </div>

      <div className='artist-banner__gradient'></div>
    </div>
  )
}
