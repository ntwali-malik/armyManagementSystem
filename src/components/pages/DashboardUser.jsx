import React from 'react';
import UserSideBar from './UserSideBar';
import DashboardContent from './DashboardContent';
import Grid from '@mui/material/Grid';

const DashboardUser = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <UserSideBar />
      </Grid>
      <Grid item xs={9}>
        <DashboardContent />
      </Grid>
    </Grid>
  );
};

export default DashboardUser;
