import React from 'react'
import './Buttons.css';

const PrimaryButton = ({ buttonText, showIcon, icon, onClick }) => {
    return (
      <button className="primary-btn" onClick={onClick}>
         {showIcon && <img src={icon} alt='icon' className='icon-default' />}
        <div className='button-text'>
          {buttonText}
        </div>
      </button>
    );
};

const SecondaryButton = ({ buttonText, showIcon, icon, onClick }) => {
    return (
      <button className="secondary-btn" onClick={onClick}>
         {showIcon && <img src={icon} alt='icon' className='icon-default' />}
        <div className='button-text'>
          {buttonText}
        </div>
      </button>
    );
  };

const OutlineButton = ({ buttonText, showIcon, icon, onClick }) => {
    return (
      <button className="outline-btn" onClick={onClick}>
         {showIcon && <img src={icon} alt='icon' className='icon-default' />}
        <div className='button-text'>
          {buttonText}
        </div>
      </button>
    );
};

const ElevatedButton = ({ buttonText, showIcon, icon, onClick }) => {
    return (
      <button className="elevated-btn" onClick={onClick}>
         {showIcon && <img src={icon} alt='icon' className='icon-default' />}
        <div className='button-text'>
          {buttonText}
        </div>
      </button>
    );
};


  
export { PrimaryButton, SecondaryButton, OutlineButton, ElevatedButton };
