import React from 'react';
import { SmallTags } from '../Tags/Tags';
import './TabItem.css';

const TabItem = ({ num, status, isActive, onClick }) => {
  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      <p className='tab-text'>{status}</p>
      <SmallTags num={num} isLightVersion={true} />
    </div>
  );
};

export default TabItem;

