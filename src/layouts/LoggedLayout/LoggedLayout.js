import React from 'react'
import "./loggedLayout.scss";
import { LeftMenu } from '../../components/layouts';

export function LoggedLayout(props) {
  const { children } = props;

  return (
    <div className='logged-layout'>
      <div className='logged-layout__content'>
        <div className='logged-layout__left-menu'>
          <LeftMenu />
        </div>
        <div className='logged-layout__children-content'>
          <div className='logged-layout__top-bar'>
            <h1>Top Bar</h1>
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className='logged-layout__footer'>
        <p>Footer</p>
      </div>
    </div>
  )
}
