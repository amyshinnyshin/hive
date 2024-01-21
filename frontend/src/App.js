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







const App = () => {
  return (
    <Router> 
        <Routes>
          <Route path="/myapplications" element={<MyApplications />} />
          <Route path="/myapplications/add" element={<AddApplication />} />
          <Route path="/myapplications/:id" element={<Modal />} />
          <Route path="/myapplications/:id/edit" element={<EditApplication />} />
        </Routes>
    </Router>
  );
}

export default App;


