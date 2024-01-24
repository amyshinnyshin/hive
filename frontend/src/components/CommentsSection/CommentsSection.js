// CommentsSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentTextBox } from '../InputFields/InputFields';


import './CommentsSection.css';
import Comments from '../Comments /Comments';

const CommentsSection = ({ applicationId }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/comments/?job_application=${applicationId}`);
        const sortedComments = [...response.data].reverse();

        setComments(sortedComments);

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [applicationId]);

  const handleAddComment = async () => {
    try {
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

      setComments((prevComments) => [response.data, ...prevComments]);
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8000/api/comments/${commentId}/`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
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
          <Comments key={comment.id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;



