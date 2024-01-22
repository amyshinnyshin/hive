import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import './EditApplication.css';
import TopNav from '../../components/TopNav/TopNav'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { DateInput, TextBox, TextInput } from '../../components/InputFields/InputFields';
import Dropdown from '../../components/Dropdown/Dropdown';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons/Buttons';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';




const EditApplication = () => {
    const { id }  = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        status: '',
        company_name: '',
        role: '',
        date_applied: '',
        description: '',
    });

    useEffect(() => {

        const fetchAppDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/myapplications/${id}/`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching application details:', error)
            }
        };
        fetchAppDetails();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/myapplications/${id}/`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            navigate('/myapplications')
        } catch (error) {
            console.error('Error updating application details:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevApplication) => ({
            ...prevApplication, 
            [name]: value,
        }));
    };

    const handleStatusChange = (selectedOption) => {
        setFormData((prevApplication) => ({
          ...prevApplication,
          status: selectedOption.value,
        }));
      };

    const statusOptions = [
        { value: 'applied', label: 'APPLIED', emoji: '✅'},
        { value: 'interviews', label: 'INTERVIEWS', emoji: '❓' },
        { value: 'rejected', label: 'REJECTED', emoji: '😩' },
        { value: 'deferred', label: 'DEFERRED', emoji: '👎' },
        { value: 'offered', label: 'OFFERED', emoji: '🎉' },
      ];

    

    return (
        <div>
        <div className='top-nav-container'>
            <TopNav />
        </div>

        <div className='leftsidebar-container'>
        <LeftSidebar />
        </div>

        <div className='page-container'>
            <div className='form-page-container'>
                <div className='breadcrumb'></div>
                
                <form onSubmit={handleSubmit} className='form-container'>
                        <div className='form'>
                            <Breadcrumb pageName='Edit'/>
                            <h2>Edit Application</h2>
                            <div className='form-group'>
                            <div className='left-section'>
                            <div className='container'>
                                <TextInput
                                    label="Company Name"
                                    type="text"
                                    name="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    placeholder="Add company name..."
                                />
                                <TextInput
                                    label="Role"
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    placeholder="Add role title..."
                                />
                                <DateInput
                                    label="Date Applied"
                                    name="date_applied"
                                    value={formData.date_applied}
                                    onChange={handleChange}
                                />
                                <TextBox
                                    label="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Add job description..."
                                />
                                </div>
                            </div>
                            <div className='right-section'>
                                <Dropdown options={statusOptions} value={formData.status} onSelect={handleStatusChange} className='dropdown' />

                                <div className='comments-section'>
                                    <h4>Comments</h4>
                                </div>
                                

                            </div>
                            </div>
                        </div>
                        <div className='btm-button-container'>
                            <Link to={`/myapplications`} className='no-link-styling'>
                                <SecondaryButton buttonText="Cancel" />
                            </Link>
                            <PrimaryButton type="submit" buttonText="Save Change" />
                        </div>
                        </form>



            </div>
        </div>
    </div>
    )
};

export default EditApplication
