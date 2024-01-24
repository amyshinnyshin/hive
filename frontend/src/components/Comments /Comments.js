// Comment.js
import React from 'react';

const Comments = ({ comment }) => {
  return (
    <div className='created-comment-textbox-container'>
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
              {new Date(comment.created_at).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
              })}
            </p>
          </div>
          <div className='comment-action-buttons '>
            <div className="comment-action edit">
              <img src="/icons/edit.png" alt='icon' className='icon-default'></img>
              <p className='small-edit-link'>Edit</p>
            </div>
            <div className="comment-action delete">
              <img src="/icons/delete-red-default.png" alt='icon' className='icon-default'></img>
              <p className='small-delete-link'>Delete</p>
            </div>
          </div>
        </div>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comments;
