import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '2rem',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.5rem',
    color: '#666',
  },
};

export default NotFoundPage;