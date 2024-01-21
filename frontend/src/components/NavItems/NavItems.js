import React from 'react';
import './NavItems.css';

const NavItem = ({ icon, label, iconafter, showIconAfter }) => {
  return (
    <li className='nav-item'>
      <img src={icon} alt='icon' className='icon-default'></img>
      <div>{label}</div>
      {showIconAfter && <img src={iconafter} alt='icon' className='icon-default'></img>}
    </li>
  );
};



const IconNavItem = ({ icon }) => {
  return (
    <li className='icon-nav-item'>
      <img src={icon} alt='icon' className='icon-36'></img>
    </li>
  );
};



export { NavItem, IconNavItem }


