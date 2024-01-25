import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

import { Link } from 'react-router-dom'

import './Dashboard.css';
import Tabs from '../../components/Tabs/Tabs';
import Tiles from '../../components/Tiles/Tiles';
import { OutlineButton } from '../../components/Buttons/Buttons';


const Dashboard = () => {
  return (
    <div>
        <div className='top-nav-container'>
            <TopNav />
        </div>

        <div className='leftsidebar-container'>
            <LeftSidebar />
        </div>

        <div className='page'>
          <div className='dashboard-page-container'>
            <div className='header'>
              <h1>Buzz Buzz... Let's find a job today! </h1>
            </div>
            <div className='dashboard-content-container'>
              <div className='left-section'>

                <div className='card-container'>
                  <div className='card-header-section'>
                    <h4>
                      Overview
                    </h4>
                  </div>

                  <div className='card-body-section'>
                    <div className='data-group'>
                      <div className='data-set'>
                        <label>Interview Scheduled</label>
                        <h2>2</h2>
                      </div>
                      <div className='data-set'>
                        <label>Weekly Goal</label>
                        <h2>2</h2>
                      </div>
                      <div className='data-set'>
                        <label>Days Job Searching</label>
                        <h2>2</h2>
                      </div>
                      <div className='data-set'>
                        <label>Total Applications</label>
                        <h2>2</h2>
                      </div>
                    </div>
                  </div>
                  

                </div>
                <div className='card-container'>
                  <div className='card-header-section'>
                    <h4>
                      My Applications
                    </h4>
                    <Link to="/myapplications" className='link-default no-styling' > 
                      <p className='bold blue'>Manage Applications</p>
                      <img src="/icons/arrow.png" alt="icon" className='icon-default'></img>
                    </Link>
                  </div>
                  <div className='tab-container'>
                    <Tabs />
                  </div>

                  <div className='card-body-section'>
                    <Tiles status='applied'/>
                    <Tiles status='interviews'/>
                    <Tiles status='rejected'/>
                    <Tiles status='deferred'/>
                    <Tiles status='offered'/>

                  </div>
                  

                </div>
              </div>
              <div className='right-section'>
                <div className='profile-dashboard'>
                  <div className='dashboard-profile-container'>
                    <div className='user-container'>
                      <div className='dashboard-profile'>
                        <h2>AS</h2>
                      </div>
                      <div className='name-and-job'>
                        <h3>Amy Shin</h3>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                    <OutlineButton buttonText="Edit Profile" showIcon={true} icon="/icons/edit-purple.png"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
