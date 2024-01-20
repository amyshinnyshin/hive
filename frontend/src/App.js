import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import MyApplications from './/pages/MyApplications/MyApplications'
import TopNav from './components/TopNav/TopNav'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import {PrimaryButton, OutlineButton } from './components/Buttons/Buttons'


// Components

// CSS
import './App.css';
import './style.css';



const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/my-applications" element={<MyApplications />} />
        {/* Add more routes for other pages */}
      </Routes>
      <div>
      <div className='top-nav-container'>
        <TopNav />
      </div>
      
      <div className='global-layout'>

        <div className='leftsidebar-container'>
          <LeftSidebar />
        </div>


        <div className='page-container'>
          <div className="page-content-container">
            <div className='header-section'>
              <h1>My Applications</h1>

              <div className='button-group'>
              <OutlineButton buttonText="End Job Search" showIcon={false} />
              <PrimaryButton buttonText="Add" showIcon={true} icon="/icons/addwhite.png" />
              </div>
            </div>

            <div className='status-section-container'>

              <div className='status-section'>
                <div className='status-header-container'>
                  <div className='left-group'>
                    <div className='emoji'><p>✅</p></div>
                    <p className='status-header'>APPLIED</p>
                  </div>
                  <div className='tag'>
                    <p className='small'>6</p>
                  </div>
                </div>
              </div>

              <div className='status-section'>
                <div className='status-header-container'>
                  <div className='left-group'>
                    <div className='emoji'><p>❓</p></div>
                    <p className='status-header'>APPLIED</p>
                  </div>
                  <div className='tag'>
                    <p className='small'>6</p>
                  </div>
                </div>
              </div>

              <div className='status-section'>
                <div className='status-header-container'>
                  <div className='left-group'>
                    <div className='emoji'><p>😩</p></div>
                    <p className='status-header'>APPLIED</p>
                  </div>
                  <div className='tag'>
                    <p className='small'>6</p>
                  </div>
                </div>
              </div>

              <div className='status-section'>
                <div className='status-header-container'>
                  <div className='left-group'>
                    <div className='emoji'><p>👎</p></div>
                    <p className='status-header'>APPLIED</p>
                  </div>
                  <div className='tag'>
                    <p className='small'>6</p>
                  </div>
                </div>
              </div>

              <div className='status-section'>
                <div className='status-header-container'>
                  <div className='left-group'>
                    <div className='emoji'><p>🎉</p></div>
                    <p className='status-header'>APPLIED</p>
                  </div>
                  <div className='tag'>
                    <p className='small'>6</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        
      </div>

</div>


    </Router>
  );
}

export default App;


