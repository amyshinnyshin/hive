import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddApplication = () => {
  const [formData, setFormData] = useState({
    status: '',
    company_name: '',
    role: '',
    date_applied: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        axios.post('http://localhost:8000/api/myapplications/', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

      console.log('Application added successfully!');
    } catch (error) {
      console.error('Error adding application:', error);
    }
  };

  return (
    <div>
      <h2>Add New Application</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="applied">Applied</option>
            <option value="interviews">Interviews</option>
            <option value="rejected">Rejected</option>
            <option value="offered">Offered</option>
            <option value="deferred">Deferred</option>
            <option value="selected">Selected</option>
          </select>
        </label>
        <br />
        <label>
          Company Name:
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date Applied:
          <input
            type="date"
            name="date_applied"
            value={formData.date_applied}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Application</button>
        <Link to={`/myapplications/`}>
            <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddApplication;
