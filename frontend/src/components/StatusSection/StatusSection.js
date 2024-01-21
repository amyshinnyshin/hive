import React from 'react'

import './StatusSection.css';


import Tiles from '../Tiles/Tiles'
import StatusColumnHeader from '../StatusColumnHeader/StatusColumnHeader';



const StatusSection = () => {
  return (
    <div className='status-section-grid'>
      <div className='status-column applied'>
        <StatusColumnHeader statusName="APPLIED" emoji="✅"/>
        <Tiles status='applied'/>
      </div>
      <div className='status-column interviews'>
        <StatusColumnHeader statusName="INTERVIEWS" emoji="❓"/>
        <Tiles status='interviews'/>
      </div>
      <div className='status-column rejected'>
        <StatusColumnHeader statusName="REJECTED" emoji="😩"/>
        <Tiles status='rejected'/>
      </div>
      <div className='status-column deferred'>
        <StatusColumnHeader statusName="DEFERRED" emoji="👎"/>
        <Tiles status='deferred'/>
      </div>
      <div className='status-column offered'>
        <StatusColumnHeader statusName="OFFERED" emoji="🎉"/>
        <Tiles status='offered'/>
      </div>
    </div>
  );
};

export default StatusSection



