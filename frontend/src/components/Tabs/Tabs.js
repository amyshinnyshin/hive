import React from 'react';
import TabItem from '../TabItem/TabItem';
import './Tabs.css';

const Tabs = ({ activeTab, onTabClick, tileCounts }) => {
  return (
    <div className='tab-group'>
      <TabItem 
        status='All' 
        isActive={activeTab === 'all'} 
        onClick={() => onTabClick('all')}
        num={tileCounts.all}>
      </TabItem>

      <TabItem 
        status='Applied' 
        isActive={activeTab === 'applied'} 
        onClick={() => onTabClick('applied')}
        num={tileCounts.applied}>
      </TabItem>

      <TabItem 
        status='Interviews' 
        isActive={activeTab === 'interviews'} 
        onClick={() => onTabClick('interviews')}
        num={tileCounts.interviews}>
      </TabItem>

      <TabItem 
        status='Rejected' 
        isActive={activeTab === 'rejected'} 
        onClick={() => onTabClick('rejected')}
        num={tileCounts.rejected}>
      </TabItem>

      <TabItem 
        status='Deferred' 
        isActive={activeTab === 'deferred'} 
        onClick={() => onTabClick('deferred')}
        num={tileCounts.deferred}>
      </TabItem>
      <TabItem 
        status='Offered' 
        isActive={activeTab === 'offered'} 
        onClick={() => onTabClick('offered')}
        num={tileCounts.offered}>
      </TabItem>
    </div>
  );
};

export default Tabs;