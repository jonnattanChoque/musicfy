import React from 'react';
import { Icon, Image, Input } from 'semantic-ui-react';
import "./Footer.scss";
import { Player } from "../../Shared";

export function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <Image src={null} />
            <p>Song name</p>
        </div>
        <div className='footer__center'>
            <Player />
        </div>
        <div className='footer__right'>
            <Input type='range' min={0} max={1} step={0.1} label={<Icon name='volume up' />} />
        </div>
    </div>
  )
}
