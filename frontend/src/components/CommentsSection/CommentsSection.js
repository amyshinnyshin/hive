import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Comments from '../Comments /Comments';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';

import './CommentsSection.css';
import { CommentTextBox } from '../InputFields/InputFields';
import { SmallTags } from '../Tags/Tags';

const CommentsSection = ({ applicationId }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [isInputFocused, setInputFocused] = useState(false);

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

  const handleAddComment = async (e) => {
    e.preventDefault();
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
      setInputFocused(false);
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

  const handleEditComment = async (commentId, editedText) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/comments/${commentId}/`, {
        text: editedText,
        job_application: applicationId,
        updated_at: new Date().toISOString(),
      });

      setComments((prevComments) => [
        { ...response.data, text: response.data.text, updated_at: response.data.updated_at },
        ...prevComments.filter((comment) => comment.id !== commentId),
      ]);
    } catch (error) {
      console.error('Error editing comment:', error.response.data);
    }
  };

  return (
    <div className="comments-section">
      <div className='comments-header'>
        <h4>Comments</h4>
        <SmallTags num={comments.length} isLightVersion={true}/>
      </div>

      <div className={`comment-textbox-container ${isInputFocused ? 'active' : ''}`}>
        <div className='profile-container'>
          <div className='profile'>
            <p className='profile'>A</p>
          </div>
        </div>

        <div className='comment-input'>
          <CommentTextBox
            label='Add a comment or note...'
            name='comment'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onClick={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder='Add a comment or note...'
          />
          {isInputFocused && (
            <div className='comments-btn-group'>
              <SecondaryButton type='button' buttonText="Cancel" showIcon={false} onClick={() => { setCommentText(''); setInputFocused(false); }} />
              <PrimaryButton type='button' onClick={handleAddComment} buttonText="Add Comment" showIcon={false} />
            </div>
          )}
        </div>
      </div>
      <div className='comments-spacing'>
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment} onDelete={handleDeleteComment} onEdit={handleEditComment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
