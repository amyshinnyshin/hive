import React from 'react'

import './Tags.css';


const Tags = ({num}) => {
  return (
    <div className='tag'>
      <p className='small'>{num}</p>
    </div>
  )
}

export default Tags
