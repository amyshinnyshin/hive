import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Modal.css';

const Modal = ({ application, onClose, onEdit, onDelete }) => {
  const [notHovered, hovered] = useState(false);
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/myapplications/${application.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/myapplications/${application.id}/`, {
        headers: {
            'Content-Type': 'application/json',
        },
      });

      onClose();
      window.location.reload(); 
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };


  const handleHoverIn = () => {
    hovered(true);
  };

  const handleHoverOut = () => {
    hovered(false);
  };

  if (!application) {
    return null;
  }

  return (
    <div className='overlay'>
      <div>
        <div className='modal-container'>
          <div className='modal-header-section'>
            <h2>Application Details {application.id}</h2>

            <div className='left-section'>
              <div className='action-button-group'>
                <div onClick={handleEdit} className='icon-40'>
                  <img src='/icons/edit-grey.png' alt='Edit' className='icon-button icon-40'></img>
                </div>

                <div
                  onClick={handleDelete}
                  className='icon-40'
                  onMouseEnter={handleHoverIn}
                  onMouseLeave={handleHoverOut}
                >
                  <img
                    src={notHovered ? '/icons/delete-red.png' : '/icons/delete-grey.png'}
                    alt='Delete'
                    className='delete-icon icon-button icon-40'
                  ></img>
                </div>
              </div>

              <div className='modal-close-button' onClick={onClose}>
                <img src='/icons/line.png' alt='Line' className='line icon-32'></img>
                <img src='/icons/close-grey.png' alt='Close' className='icon-button icon-40'></img>
              </div>
            </div>
          </div>

          <div className='modal-body-container'>
            <div className='application-section'>
              <div className='read-only'>
                <label>Status</label>
                <p>{application.status}</p>
              </div>
              <div>
                <label>Company Name</label>
                <p>{application.company_name}</p>
              </div>
              <div className='read-only'>
                <label>Role</label>
                <p>{application.role}</p>
              </div>
              <div className='read-only'>
                <label>Date Applied</label>
                <p>{application.date_applied}</p>
              </div>
              <div className='read-only'>
                <label>Description</label>
                <p>{application.description}</p>
              </div>
            </div>
            <div className='comments-section'>
              <h4>Comments</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;



