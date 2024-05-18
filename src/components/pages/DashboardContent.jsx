import React from 'react';

const DashboardContent = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '20px'
      }}
      id="main-content"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
        className="container"
      >
        {/* Dashboard content goes here */}
        <h2
          style={{
            marginTop: '20px',
            marginBottom: '40px'
          }}
          className="my-4"
        >
          Dashboard
        </h2>
        {/* Add cards, charts, and other content */}
      </div>
    </div>
  );
};

export default DashboardContent;
