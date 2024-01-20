import React from 'react'
import { Link } from 'react-router-dom';


import './MyApplications.css';
import Tiles from '../../components/Tiles/Tiles';
import TopNav from '../../components/TopNav/TopNav';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { OutlineButton, PrimaryButton } from '../../components/Buttons/Buttons';



const MyApplications = () => {

  return (
    <div>
      <div className='top-nav-container'>
        <TopNav />
      </div>

      <div className='leftsidebar-container'>
          <LeftSidebar />
      </div>
      <div className='page-container'>
        <div className='content-container'>

          <div className='header-section'>
            <h1>My Applications</h1>

            <div className='button-group'>
              <OutlineButton buttonText="End Job Search" showIcon={false} />

              <Link to={`/myapplications/add`}>
                <PrimaryButton buttonText="Add" showIcon={true} icon="/icons/addwhite.png" />
              </Link>
            </div>
          </div>
          

          <div className='status-section-container'>
              <Tiles />
          </div>


        </div>
      </div>
    </div>
  );
};


export default MyApplications
