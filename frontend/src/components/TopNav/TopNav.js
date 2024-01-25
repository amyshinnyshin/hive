import React from 'react'
import './TopNav.css';
import { IconNavItem } from '../NavItems/NavItems'


const TopNav = () => {
  return (
    <ul className='top-nav-group'>
      <div className='left-section'>
        <IconNavItem icon="/icons/menu.png" />
        <img src='/images/hivelogo.png' alt='icon' className='logo'></img>
      </div>
      <div className='right-section'>
        <IconNavItem icon="/icons/search.png" />
        <IconNavItem icon="/icons/notifications.png" />
        <IconNavItem icon="/icons/settings.png" />
        <div className='nav-profile-container'>
          <div className='profile'>
            <p className='profile'>A</p>
          </div>
        </div>
      </div>
    </ul>
  )
}

export default TopNav
