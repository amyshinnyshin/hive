import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css'; 



const Breadcrumb = ({ pageName }) => {
  return (
    <div className='breadcrumb-container'>
        <Link to='/myapplications' className='no-link-styling'>
            <p className='small'>My Applications</p>
        </Link>
      
        <img src='/icons/chevron.png' alt='icon' className='icon-small'></img>
        <p className='small'>{pageName}</p>
    </div>
  );
};

export default Breadcrumb;


