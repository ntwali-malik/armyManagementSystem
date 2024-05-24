import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../service/UsersService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UsersService.login(email, password);
      console.log(userData);
      if (userData.token && userData.role == "ADMIN") {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        navigate("/dashboard");
      }else if (userData.token && userData.role == "USER"){
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        navigate("/userDashboard");
      }
       else {
        setError(userData.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
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
    border: "1px solid '#ccc'",
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
        <h2 style={headingStyle}>Login</h2>
        {error && <p style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input
            type="password"
            id="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Login
        </button>
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#555' }}>
          Don't have an account? 
          <a
            href="/signup"
            style={isLinkHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
