import React, { useState } from 'react';
import UserService from '../service/UsersService';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        city: ''
    });
    const [isHovered, setIsHovered] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear errors when input changes
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const { name, email, password, role, city } = formData;
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!password.trim()) {
            errors.password = 'Password is required';
        } else if (password.length < 5) {
            errors.password = 'Password must be at least 5 characters';
        }
        if (!role.trim()) {
            errors.role = 'Role is required';
        }
        if (!city.trim()) {
            errors.city = 'City is required';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const token = localStorage.getItem('token');
                await UserService.register(formData, token);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    role: '',
                    city: ''
                });
                alert('User registered successfully');
                navigate('/login');
            } catch (error) {
                console.error('Error registering user:', error);
                alert('An error occurred while registering user');
            }
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#081a15',
        margin: '0',
        padding: '0',
        fontFamily: 'Arial, sans-serif',
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '500px',
    };

    const headingStyle = {
        marginBottom: '1rem',
        color: '#333',
    };

    const formGroupStyle = {
        marginBottom: '1rem',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        color: '#555',
    };

    const inputStyle = {
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: isHovered ? '#0056b3' : '#007bff',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2 style={headingStyle}>Registration</h2>
                <div style={formGroupStyle}>
                    <label htmlFor="name" style={labelStyle}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="role" style={labelStyle}>
                        Role
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Enter your role"
                        required
                        style={inputStyle}
                    />
                    {errors.role && <div style={{ color: 'red' }}>{errors.role}</div>}
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="city" style={labelStyle}>
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                        required
                        style={inputStyle}
                    />
                    {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
                </div>
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegistrationPage;
