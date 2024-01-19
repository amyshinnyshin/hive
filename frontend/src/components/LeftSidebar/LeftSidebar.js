import React from 'react'
import './LeftSidebar.css';
import { ElevatedButton } from '../Buttons/Buttons'

const LeftSidebar = () => {
  const handleClick = () => {
    console.log('Button Clicked');
  };

  return (
    <ul className='leftsidebar-group'>
      <div className='top-section'>
        <div className='nav-item-group'>
          <li>Dashboard</li>
          <li>My Applications</li>
          <li>Resume</li>
          <li>Inteview Prep</li>
        </div>
        
        <ElevatedButton buttonText="Add" showIcon={false} onClick={handleClick} />
      </div>
    
      <li>Find Jobs</li>
    </ul>
  )
}

export default LeftSidebar
