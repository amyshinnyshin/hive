import React from 'react'
import './InputFields.css';


const TextInput = ({ label, type, name, value, onChange, placeholder }) => {
    return (
      <label className='text-input'>
        {label}
        <input
          className='default'
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    );
  };

const DateInput = ({ label, name, value, onChange, placeholder }) => {
    return (
      <label className='date-input'>
        {label}
        <input
            className='default'
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
      </label>
    );
};

const TextBox = ({ label, name, value, onChange, placeholder }) => {
    return (
      <label className='textbox'>
        {label}
        <textarea 
          className='textarea default'
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}  
        />
      </label>
    );
  };

  const CommentTextBox = ({ name, value, onChange, placeholder }) => {
    return (
        <textarea 
          className='comment-textarea default'
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}  
        />
    );
  };
  
  


export { TextInput, DateInput, TextBox, CommentTextBox } 
