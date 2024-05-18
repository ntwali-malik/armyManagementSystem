import React, { useState } from 'react';

function Signup() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [role, setRole] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Form submitted with role:', role);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#081a15',
    margin: '0',
    padding: '0',
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '500px'
  };

  const headingStyle = {
    marginBottom: '1rem',
    color: '#333'
  };

  const formGroupStyle = {
    marginBottom: '1rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: isHovered ? '#0056b3' : '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const linkHoverStyle = {
    color: '#0056b3'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={headingStyle}>Sign Up</h2>
        <div style={formGroupStyle}>
          <label htmlFor="username" style={labelStyle}>Username</label>
          <input type="text" id="username" name="username" required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input type="password" id="password" name="password" required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Role</label>
          <div>
            <label>
              <input
                type="radio"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
                style={{ marginRight: '0.5rem' }}
              />
              User
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
                style={{ marginRight: '0.5rem' }}
              />
              Admin
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                value="manager"
                checked={role === 'manager'}
                onChange={() => setRole('manager')}
                style={{ marginRight: '0.5rem' }}
              />
              Manager
            </label>
          </div>
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Sign Up
        </button>
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#555' }}>
          Already have an account?{" "}
          <a
            href="/login"
            style={isLinkHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
