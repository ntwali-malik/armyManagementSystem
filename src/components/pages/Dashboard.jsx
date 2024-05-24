// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <DashboardContent />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
