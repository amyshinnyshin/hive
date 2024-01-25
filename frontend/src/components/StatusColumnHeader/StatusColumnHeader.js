import React from 'react';

import './StatusColumnHeader.css';

import { SmallTags } from '../Tags/Tags';

const StatusColumnHeader = ({ emoji, statusName, count }) => {
  return (
    <div className='status-header-container'>
      <div className='left-section'>
        <div className='myapp-emoji-container'>
          <p>{emoji}</p>
        </div>
        <p>{statusName}</p>
      </div>
      <SmallTags num={count} isLightVersion={false} />
    </div>
  );
};

export default StatusColumnHeader;
