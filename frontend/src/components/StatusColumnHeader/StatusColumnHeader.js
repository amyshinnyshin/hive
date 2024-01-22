// import React from 'react'

// import './StatusColumnHeader.css';

// import Tags from '../Tags/Tags'



// const StatusColumnHeader = ({ emoji, statusName }) => {
//   return (
//     <div className='status-header-container'>
//         <div className='left-section'>
//             <div className='myapp-emoji-container'>
//                 <p>{emoji}</p>
//             </div>
//             <p>{statusName}</p>
//         </div>
//         <Tags />
//     </div>
//   )
// }

// export default StatusColumnHeader

import React from 'react';

import './StatusColumnHeader.css';

import Tags from '../Tags/Tags';

const StatusColumnHeader = ({ emoji, statusName, count }) => {
  return (
    <div className='status-header-container'>
      <div className='left-section'>
        <div className='myapp-emoji-container'>
          <p>{emoji}</p>
        </div>
        <p>{statusName}</p>
      </div>
      <Tags num={count} />
    </div>
  );
};

export default StatusColumnHeader;
