import React from 'react'
import { SmallTags } from '../Tags/Tags'
import './TabItem.css';

const TabItem = ({ status }) => {
  return (
    <div className='tab'>
      <p>{status}</p>
      <SmallTags num="2" />
    </div>
  )
}

export default TabItem
