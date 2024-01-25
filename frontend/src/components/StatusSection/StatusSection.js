import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './StatusSection.css';


import Tiles from '../Tiles/Tiles'
import StatusColumnHeader from '../StatusColumnHeader/StatusColumnHeader';



const StatusSection = ( ) => {
  const [applications, setApplications] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/myapplications/');
        setApplications(response.data);
      } catch(error) {
        console.error('Error fetching data:', error)
      }
    };

    fetchData();

  }, []);

  const counter = (status) => {
    return applications.filter(application => application.status === status).length;
  }


  return (
    <div className='status-section-grid'>
      <div className='status-column applied'>
        <StatusColumnHeader statusName="APPLIED" emoji="✅" count={counter('applied') || 0} />
        <Tiles status='applied'showDefaultTextTags={false} isBigTile={false}/>
      </div>
      <div className='status-column interviews'>
        <StatusColumnHeader statusName="INTERVIEWS" emoji="❓" count={counter('interviews') || 0}/>
        <Tiles status='interviews' showDefaultTextTags={false} isBigTile={false}/>
      </div>
      <div className='status-column rejected'>
        <StatusColumnHeader statusName="REJECTED" emoji="😩" count={counter('rejected') || 0}/>
        <Tiles status='rejected' showDefaultTextTags={false} isBigTile={false}/>
      </div>
      <div className='status-column deferred'>
        <StatusColumnHeader statusName="DEFERRED" emoji="👎" count={counter('deferred') || 0} />
        <Tiles status='deferred' showDefaultTextTags={false} isBigTile={false}/>
      </div>
      <div className='status-column offered'>
        <StatusColumnHeader statusName="OFFERED" emoji="🎉" count={counter('offered') || 0}/>
        <Tiles status='offered' showDefaultTextTags={false} isBigTile={false}/>
      </div>
    </div>
  );
};

export default StatusSection



