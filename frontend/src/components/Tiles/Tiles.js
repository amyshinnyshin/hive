import React, { useState, useEffect } from 'react';
// import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Tiles.css';
import Modal from '../Modal/Modal';

const Tiles = ({ status }) => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/myapplications/');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterTiles = applications.filter(application => application.status === status);

  const handleOpenModal = (application) => {
    setSelectedApplication(application);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedApplication(null);
    setModalOpen(false);
  };


  return (
    <div className='tile'>
      {applications.length > 0 ? (
        filterTiles.map(application => (
          <div key={application.id} className='tile-container' onClick={() => handleOpenModal(application)}>
            <div className='top-section'>
              <h4>{application.company_name}</h4>
              <p>{application.role}</p>
              {false && <p className='status'>{application.status}</p>}
            </div>

            <div className='bottom-section'>
              <div className='comments-container'>
                <img src='/icons/comments.png' className='icon-small' alt='icon'></img>
                <p className='small'>2</p>
              </div>
              <p className='small'>Applied {application.date_applied}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No applications available.</p>
      )}

      <div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} application={selectedApplication} />
        )}
      </div>
    </div>
  );
};


export default Tiles;
