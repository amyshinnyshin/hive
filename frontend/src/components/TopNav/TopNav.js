import React from 'react'
import './TopNav.css';


const TopNav = () => {
  return (
    <ul className='top-nav-group'>
      <div className='left-section'>
        <li>Menu</li>
      </div>
      <div className='right-section'>
        <li>Search</li>
        <li>Alerts</li>
        <li>Settings</li>
        <li>Profile</li>
      </div>
    </ul>
  )
}

export default TopNav
