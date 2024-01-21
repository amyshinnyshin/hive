import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import './ApplicationDetails.css';

const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`/api/myapplications/${id}/`);
        setApplication(response.data);
      } catch (error) {
        console.error('Error fetching application details:', error);
      }
    };

    fetchApplication();
  }, [id]);

    const handleEdit = () => {
      navigate(`myapplications/${id}/edit`);
    }

    const handleDelete = async () => {
      try {
        await axios.delete(`/api/myapplications/${id}/`, {
          headers: {
            'X-CSRFToken': 'your_csrf_token_here', 
          },
        });
        navigate('/myapplications')

      } catch (error) {
        console.error('Error deleting application:', error);
      }
    };

  return (
    <div className='application-details-page'>
      <div className='overlay'>
        <div>
          {application ? (
            <div  className='modal-container'>
              <div className='modal-header-section'>
                <h2>Application Details {application.id}</h2>

                <div className='left-section'>
                  <div className='action-button-group'>
                    <div onClick={handleEdit} className='icon-40'>
                      <img src='/icons/edit-grey.png' alt='icon' className='icon-button icon-40'></img>
                    </div>

                    <div onClick={handleDelete} className='icon-40'>
                      <img src='/icons/delete-grey.png' alt='icon' className='icon-button icon-40'></img>
                    </div>
                  </div>

                  <div className='modal-close-button'>
                    <img src='/icons/line.png' alt='icon' className='line icon-32'></img>
                    <img src='/icons/close-grey.png' alt='icon' className='icon-button icon-40'></img>
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
                    <h4>
                      Comments
                    </h4>
                  </div>
              </div>

            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;


