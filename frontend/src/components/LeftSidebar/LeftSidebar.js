import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


//Components
import { ElevatedButton } from '../Buttons/Buttons'
import { NavItem } from '../NavItems/NavItems'


// CSS
import './LeftSidebar.css';


const LeftSidebar = () => {
  const navigate = useNavigate()

  const handleAddClick = () => {
    navigate('/myapplications/add')
  }

  const isPathActive = (path) => {
    const currentPath = window.location.pathname;
    return currentPath.startsWith(path);
  };

  return (
    <ul className='leftsidebar-group'>
      <div className='top-section'>
        <div className='nav-item-group'>
          
          <NavItem icon="/icons/dashboard.png" label="Dashboard" showIconAfter={false}/>

          <NavLink to='/myapplications' className={`no-styling ${isPathActive('/myapplications') ? 'active-nav' : ''}`}>
            <NavItem icon="/icons/myappplications.png" label="My Applications" showIconAfter={false} />
          </NavLink>

          <NavItem icon="/icons/resume.png" label="Resume" showIconAfter={false}/>
          <NavItem icon="/icons/interviewprep.png" label="Interview Prep" showIconAfter={false}/>
        </div>

            <ElevatedButton buttonText="Add" showIcon={true} icon="/icons/addpurple.png" onClick={handleAddClick} />
      </div>
    
      <div className="btm-nav-item">
        <NavItem className="find-job" icon="/icons/briefcase.png" label="Find Jobs" iconafter="/icons/external.png" showIconAfter={true}/>
      </div>
    </ul>
  )
}

export default LeftSidebar
