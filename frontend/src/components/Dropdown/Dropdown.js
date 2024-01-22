import React, { useState } from 'react';
import './Dropdown.css'; 

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className='dropdown-input'>
        <div className="selected-option" onClick={toggleDropdown}>
          <div className='placeholder-group'>
            <div className='placeholder'>
              {selectedOption ? (
                <>
                  <div className='menu-emoji-container'>
                    <p>{selectedOption.emoji}</p>
                  </div>
                  {selectedOption.label}
                </>
              ) : (
                'Select Status'
              )}
            </div>
            <img src='/icons/caret.png' alt='icon' className='icon-default caret'></img>
          </div>
        </div>
      </div>

      <div className='dropdown-menu'>
        {isOpen && (
          <ul className="options-container">
            {options.map((option) => (
              <li className="option" key={option.value} onClick={() => handleSelect(option)}>
                <div className='option-container'>
                  <div className='menu-emoji-container'>
                    <p>{option.emoji}</p>
                  </div>
                  {option.label}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

