import React from 'react';
import { Icon, Image, Input } from 'semantic-ui-react';
import "./Footer.scss";
import { Player } from "../../Shared";
import { usePlayer } from "../../../hooks";

export function Footer() {
  const {song, miniature, volumen, setVolumen} = usePlayer();

  return (
    <div className='footer'>
        <div className='footer__left'>
            {miniature && <Image src={miniature} />}
            {song && <p>{song.name}</p>}
        </div>
        <div className='footer__center'>
            <Player />
        </div>
        <div className='footer__right'>
            <Input type='range' min={0} max={1} step={0.01} value={volumen} 
            onChange={(_, data) => setVolumen(Number(data.value))} label={<Icon name='volume up' />} />
        </div>
    </div>
  )
}
