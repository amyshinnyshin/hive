import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

const Resume = () => {
  return (
    <div>
      <div className='top-nav-container'>
            <TopNav />
        </div>

        <div className='leftsidebar-container'>
            <LeftSidebar />
        </div>
    </div>
  )
}

export default Resume
