import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import MyApplications from './pages/MyApplications/MyApplications'
import AddApplication from './pages/AddApplication/AddApplication';
import EditApplication from './pages/EditApplication/EditApplication';


// Components
import Modal from './components/Modal/Modal';


// CSS
import './App.css';
import './style.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Resume from './pages/Resume/Resume';







const App = () => {
  return (
    <Router> 
        <Routes>
          <Route path="/myapplications" element={<MyApplications />} />
          <Route path="/myapplications/add" element={<AddApplication />} />
          <Route path="/myapplications/:id" element={<Modal />} />
          <Route path="/myapplications/:id/edit" element={<EditApplication />} />
          <Route path= "/dashboard" element={<Dashboard />} />
          <Route path= "/resume" element={<Resume />} />
        </Routes>
    </Router>
  );
}

export default App;


