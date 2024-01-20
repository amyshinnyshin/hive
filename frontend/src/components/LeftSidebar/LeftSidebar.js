import React from 'react'
import { Link } from 'react-router-dom';


//Components
import { ElevatedButton } from '../Buttons/Buttons'
import { NavItem } from '../NavItems/NavItems'


// CSS
import './LeftSidebar.css';


const LeftSidebar = () => {
  const handleClick = () => {
    console.log('Button Clicked');
  };

  return (
    <ul className='leftsidebar-group'>
      <div className='top-section'>
        <div className='nav-item-group'>
          
          <NavItem icon="/icons/dashboard.png" label="Dashboard"/>

          <Link to='/my-applications' className='no-styling'>
            <NavItem icon="/icons/myappplications.png" label="My Applications"/>
          </Link>

          <NavItem icon="/icons/resume.png" label="Resume"/>
          <NavItem icon="/icons/interviewprep.png" label="Interview Prep"/>
        </div>
        
        <ElevatedButton buttonText="Add" showIcon={true} icon="/icons/addpurple.png" onClick={handleClick} />
      </div>
    
      <li>Find Jobs</li>
    </ul>
  )
}

export default LeftSidebar
