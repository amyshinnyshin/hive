import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CommentTextBox } from '../InputFields/InputFields';


import './Modal.css';


const Modal = ({ application, onClose }) => {
  const [notHovered, hovered] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/comments/?job_application=${application.id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    fetchComments();
  }, [application.id]);

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

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/comments/`,
        {
          job_application: application.id,
          text: commentText,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Update comments state with the new comment
      setComments([...comments, response.data]);

      // Clear the comment text
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
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

              <div className='comment-textbox-container'>
                <div className='profile-container'>
                  <div className='profile'>
                    <p className='profile'>AS</p>
                  </div>
                </div>
                <div className="comment-input">
                  <CommentTextBox
                      placeholder='Add a comment or note...'
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button type='button' onClick={handleAddComment}>
                      Add Comment
                    </button>
                    <ul>
                      {comments.map((comment) => (
                        <li key={comment.id}>{comment.text}</li>
                      ))}
                    </ul>
                </div>
                
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;



