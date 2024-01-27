import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Tiles.css';
import Modal from '../Modal/Modal';
import { SmallTextTags } from '../Tags/Tags';

const Tiles = ({ status, showDefaultTextTags, isBigTile }) => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  

  const tileMarginName = isBigTile ? 'margin-16px' : 'margin-8px';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/myapplications/');
        const applicationsData = response.data;

        const fetchCommentsForApplications = async () => {
          const applicationsWithComments = await Promise.all(
            applicationsData.map(async (application) => {
              try {
                const commentsResponse = await axios.get(`/api/comments/?job_application=${application.id}`);
                const sortedComments = [...commentsResponse.data].reverse();
                return { ...application, comments: sortedComments };
              } catch (commentsError) {
                console.error('Error fetching comments:', commentsError);
                return { ...application, comments: [] }; // Handle error case
              }
            })
          );

          setApplications(applicationsWithComments);
        };

        fetchCommentsForApplications();
      } catch (error) {
        console.error('Error fetching applications:', error);
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


  const statusOptions = {
    applied: { label: 'APPLIED', emoji: '✅' },
    interviews: { label: 'INTERVIEWS', emoji: '❓' },
    rejected: { label: 'REJECTED', emoji: '😩' },
    deferred: { label: 'DEFERRED', emoji: '👎' },
    offered: { label: 'OFFERED', emoji: '🎉' },
  };

  return (
    <div className='tile'>
      {filterTiles.map(application => (
        <div key={application.id} className={`tile-container ${tileMarginName}`} onClick={() => handleOpenModal(application)}>
          <div className='top-section'>
            <h4>{application.company_name}</h4>
            <p>{application.role}</p>
            <SmallTextTags
              emoji={statusOptions[application.status].emoji}
              text={statusOptions[application.status].label}
              isVisible={showDefaultTextTags} 
            />
          </div>

          <div className='bottom-section'>
            <div className='comments-container'>
              <img src='/icons/comments.png' className='icon-small' alt='icon'></img>
              <p className='small'>{application.comments.length}</p>
            </div>
            <p className='small'>Applied: {application.date_applied}</p>
          </div>
        </div>
      ))}

      <div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} application={selectedApplication} />
        )}
      </div>
    </div>
  );
};

export default Tiles;
