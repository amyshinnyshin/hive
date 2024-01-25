import React from 'react'
import TabItem from '../TabItem/TabItem'
import './Tabs.css';
import { SmallTags } from '../Tags/Tags';

const Tabs = () => {
  return (
    <div className='tab-group' >
        <div className='tab active'>
            <p>All</p>
            <SmallTags num="2" isLightVersion={true}/>
        </div>
        <TabItem status='Applied'/>
        <TabItem status='Interviews'/>
        <TabItem status='Rejected'/>
        <TabItem status='Deferred'/>
        <TabItem status='Offered'/>
    </div>
  )
}

export default Tabs
