import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Tiles.css';

const Tiles = () => {
  const navigate = useNavigate();
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/myapplications/');
        setJobApplications(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/myapplications/${id}`);
  };

  return (
    <div>
      {jobApplications.map(application => (
        <div key={application.id} className='tile-container' onClick={() => handleClick(application.id)}>
          <div className='top-section'>
            <h4>{application.company_name}</h4>
            <p>{application.role}</p>
          </div>

          <div className='bottom-section'>
            <div className='comments-container'>
              <img src='/icons/comments.png' className='icon-small' alt='icon'></img>
              <p className='small'>2</p>
            </div>
            <p className='small'>Applied {application.date_applied}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tiles;

