import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommentsSection from '../CommentsSection/CommentsSection';

import './Modal.css';
import { DefaultTextTags } from '../Tags/Tags';

const Modal = ({ application, onClose, showDefaultTextTags }) => {
  const [notHovered, hovered] = useState(false);
  const navigate = useNavigate();


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

  const statusOptions = {
    applied: { label: 'APPLIED', emoji: '✅' },
    interviews: { label: 'INTERVIEWS', emoji: '❓' },
    rejected: { label: 'REJECTED', emoji: '😩' },
    deferred: { label: 'DEFERRED', emoji: '👎' },
    offered: { label: 'OFFERED', emoji: '🎉' },
  };


  if (!application) {
    return null;
  }

  return (
    <div className='overlay'>
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
                onMouseEnter={() => hovered(true)}
                onMouseLeave={() => hovered(false)}
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
              <DefaultTextTags
              emoji={statusOptions[application.status].emoji}
              text={statusOptions[application.status].label}
              isVisible={true}
              />
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
          <div className='line-break'></div>
          <CommentsSection applicationId={application.id} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
