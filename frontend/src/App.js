import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import MyApplications from './pages/MyApplications/MyApplications'
import AddApplication from './pages/AddApplication/AddApplication';
import ApplicationDetails from './pages/ApplicationDetails/ApplicationDetails';
// import LeftSidebar from './components/LeftSidebar/LeftSidebar'
// import {PrimaryButton, OutlineButton } from './components/Buttons/Buttons'


// Components
import TopNav from './components/TopNav/TopNav';

// CSS
import './App.css';
import './style.css';




const App = () => {
  return (
    <Router> 
      <div className='App'>
      <div className=''>
        <TopNav />
      </div>
      <Routes>
        <Route path="/myapplications" element={<MyApplications />} />
        <Route path="/myapplications/add" element={<AddApplication />} />
        <Route path="/myapplications/:id" element={<ApplicationDetails />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;


