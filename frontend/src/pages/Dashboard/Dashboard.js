import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

import './Dashboard.css';


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

              <div className='dashboard-content-container'></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
