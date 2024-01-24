import React, { useState } from 'react';
import './Comments.css';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';

const Comments = ({ comment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.text);


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(comment.id, editedComment);
    setIsEditing(false);
  };
  

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedComment(comment.text);
  };

  return (
    <div className={`created-comment-textbox-container ${isEditing ? 'editing' : ''}`}>
      <div className='profile-container'>
        <div className='profile'>
          <p className='profile'>A</p>
        </div>
      </div>
      <div className='created-comment'>
        <div className='comment-header-container'>
          <div className='username-and-date'>
            <p className='bold'>Amy Shin</p>
            <p className='small'>
              {new Date(comment.updated_at).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
          <div className='comment-action-buttons'>
            {!isEditing && (
              <>
                <div className="comment-action edit" onClick={handleEdit}>
                  <img src="/icons/edit.png" alt='icon' className='icon-default'></img>
                  <p className='small-edit-link'>Edit</p>
                </div>
                <img src='/icons/line.png' alt="line" className='line-small'></img>
              </>
            )}
            <div className="comment-action delete" onClick={() => onDelete(comment.id)}>
              <img src="/icons/delete-red-default.png" alt='icon' className='icon-default'></img>
              <p className='small-delete-link'>Delete</p>
            </div>
          </div>
        </div>
        <div className='comment-input'>
          {isEditing ? (
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}

            />
          ) : (
            <p>{comment.text}</p>
          )}
          {isEditing && (
            <div className='comments-btn-group'>
                <SecondaryButton buttonText="Cancel" type='button' onClick={handleCancelEdit}/>
                <PrimaryButton buttonText="Save Changes" type='button' onClick={handleSaveEdit} />
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
