import React from 'react'
import './Buttons.css';

const PrimaryButton = ({ buttonText, showIcon, onClick }) => {
    return (
      <button className="primary-btn" onClick={onClick}>
        {showIcon} {buttonText}
      </button>
    );
};

const SecondaryButton = ({ buttonText, showIcon, onClick }) => {
    return (
      <button className="secondary-btn" onClick={onClick}>
        {showIcon} {buttonText}
      </button>
    );
  };

const OutlineButton = ({ buttonText, showIcon, onClick }) => {
    return (
      <button className="outline-btn" onClick={onClick}>
        {showIcon} {buttonText}
      </button>
    );
};

const ElevatedButton = ({ buttonText, showIcon, onClick }) => {
    return (
      <button className="elevated-btn" onClick={onClick}>
        {showIcon} {buttonText}
      </button>
    );
};


  
export { PrimaryButton, SecondaryButton, OutlineButton, ElevatedButton };
