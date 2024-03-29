import React from 'react'
import { Link } from 'react-router-dom';


import './MyApplications.css';
import TopNav from '../../components/TopNav/TopNav';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { OutlineButton, PrimaryButton } from '../../components/Buttons/Buttons';
import StatusSection from '../../components/StatusSection/StatusSection';



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

        <div className='page'>
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
                <StatusSection />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};


export default MyApplications
