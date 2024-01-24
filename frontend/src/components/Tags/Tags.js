import React from 'react'

import './Tags.css';


const SmallTags = ({num}) => {
  return (
    <div className='tag'>
      <p className='small'>{num}</p>
    </div>
  )
}

const DefaultTags = ({num}) => {
  return (
    <div className='tag'>
      <p>{num}</p>
    </div>
  )
}



export { SmallTags, DefaultTags }
