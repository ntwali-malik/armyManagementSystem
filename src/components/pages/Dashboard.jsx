// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex'
      }}
      className="page"
    >
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
