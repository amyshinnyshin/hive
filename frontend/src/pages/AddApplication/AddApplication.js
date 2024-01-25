import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './AddApplication.css';
import TopNav from '../../components/TopNav/TopNav';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { DateInput, TextBox, TextInput } from '../../components/InputFields/InputFields';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons/Buttons';
import Dropdown from '../../components/Dropdown/Dropdown';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const AddApplication = () => {
    const navigate = useNavigate();

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

    const handleStatusChange = (selectedStatus) => {
        setFormData({
            ...formData,
            status: selectedStatus.value,
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = await axios.post('http://localhost:8000/api/myapplications/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            
            if (response.status === 201) {
                setFormData({ ...formData, id: response.data.id });
                navigate('/myapplications');
            }
        } catch (error) {
            console.error('Error creating application:', error);
        }
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

            <div className='page'>
                <div className='form-page-container'>
                    <div className='breadcrumb'></div>
                    

                    <form onSubmit={handleSubmit} className='form-container'>
                        <div className='form'>
                            <Breadcrumb pageName='New'/>
                            <h1> New Application</h1>
                            
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
                                    className="textarea"
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

                                <div className='page-comments-section'>
                                    <h4>Comments</h4>
                                    
                                </div>
                                

                            </div>
                            </div>
                        </div>
                        <div className='btm-button-container'>
                            <Link to={`/myapplications`} className='no-link-styling'>
                                <SecondaryButton buttonText="Cancel" />
                            </Link>
                            <PrimaryButton type="submit" buttonText="Save Application" />
                        </div>
                        </form>

                </div>
            </div>
        </div>
    );
    };

    export default AddApplication;
