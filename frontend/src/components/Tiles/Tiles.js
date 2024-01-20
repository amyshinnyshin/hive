import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tiles = () => {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/myapplications/');
        setJobApplications(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {jobApplications.map(application => (
          <li key={application.id}>
            <Link to={`/myapplications/${application.id}`}>
              <div>
                <p>Company: {application.company_name}</p>
                <p>Role: {application.role}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tiles
