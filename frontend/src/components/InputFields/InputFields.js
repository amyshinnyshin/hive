import React from 'react'
import './InputFields.css';


const TextInput = ({ label, type, name, value, onChange, placeholderText }) => {
    return (
      <label className='text-input'>
        {label}
        <input
          className='default'
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholderText}
        />
      </label>
    );
  };

const DateInput = ({ label, name, value, onChange, placeholderText }) => {
    return (
      <label className='date-input'>
        {label}
        <input
            className='default'
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholderText}
        />
      </label>
    );
};

const TextBox = ({ label, name, value, onChange, placeholderText }) => {
    return (
      <label className='textbox'>
        {label}
        <textarea 
          className='textarea default'
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholderText}  
        />
      </label>
    );
  };
  



export { TextInput, DateInput, TextBox } 
