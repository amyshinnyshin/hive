import React from 'react'
import { Link } from 'react-router-dom';


import './MyApplications.css';
import Tiles from '../../components/Tiles/Tiles';



const MyApplications = () => {

  return (
    <div>
      <h2>My Job Applications</h2>
          <Tiles />
          <Link to={`/myapplications/add`}>
            <button>Add</button>
          </Link>
      </div>
  );
};


export default MyApplications
