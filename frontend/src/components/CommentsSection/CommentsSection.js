import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentTextBox } from '../InputFields/InputFields';
import Comments from '../Comments /Comments';


import './CommentsSection.css';


const CommentsSection = ({ applicationId }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/comments/?job_application=${applicationId}`);
        const sortedComments = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setComments(sortedComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    fetchComments();
  }, [applicationId]);

  const handleAddComment = async () => {
    const response = await axios.post(
      'http://localhost:8000/api/comments/',
      {
        job_application: applicationId,
        text: commentText,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  
    console.log('API Response:', response);

    setComments([...comments, response.data]);
  

    setCommentText('');
  };
  
  

  return (
    <div className="comments-section">
      <h4>Comments</h4>
      <div className='comment-textbox-container'>
        <div className='profile-container'>
          <div className='profile'>
            <p className='profile'>A</p>
          </div>
        </div>
        <div className='comment-input'>
          <CommentTextBox
            placeholder='Add a comment or note...'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div className='comments-btn-group'>
            <button type='button'>Cancel</button>
            <button type='button' onClick={handleAddComment}>
              Add Comment
            </button>
          </div>
        </div>
      </div>
      <div>
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;


