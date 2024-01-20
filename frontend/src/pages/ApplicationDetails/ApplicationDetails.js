import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`/api/myapplications/${id}/`);
        setApplication(response.data);
      } catch (error) {
        console.error('Error fetching application details:', error);
      }
    };

    fetchApplication();
  }, [id]);

    const handleEdit = () => {
      navigate(`myapplications/${id}/edit`);
    }

    const handleDelete = async () => {
      try {
        await axios.delete(`/api/myapplications/${id}/`, {
          headers: {
            'X-CSRFToken': 'your_csrf_token_here', 
          },
        });
        navigate('/myapplications')

      } catch (error) {
        console.error('Error deleting application:', error);
      }
    };

  return (
    <div>
      {application ? (
        <div>
          <h2>Application Details {application.id}</h2>
          <p>Status: {application.status}</p>
          <p>Company: {application.company_name}</p>
          <p>Role: {application.role}</p>
          <p>Date Applied: {application.date_applied}</p>
          <p>Description: {application.description}</p>
          
            <button onClick={handleEdit}>Edit</button>

            <button onClick={handleDelete}>Delete</button>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApplicationDetails;


