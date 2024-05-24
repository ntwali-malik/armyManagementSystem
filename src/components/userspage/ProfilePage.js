import React, { useState, useEffect } from 'react';
import UserService from '../service/UsersService';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  CssBaseline,
  Avatar,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response.ourUsers);
    } catch (error) {
      console.error('Error fetching profile information:', error);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Paper style={{ padding: '2rem' }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
              {profileInfo.name ? profileInfo.name.charAt(0).toUpperCase() : ''}
            </Avatar>
            <Typography variant="h4" gutterBottom>
              Profile Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Name:</strong> {profileInfo.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Email:</strong> {profileInfo.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>City:</strong> {profileInfo.city}
                </Typography>
              </Grid>
              {profileInfo.role === "ADMIN" && (
                <Grid item xs={12} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    component={Link}
                    to={`/update-user/${profileInfo.id}`}
                  >
                    Update This Profile
                  </Button>
                </Grid>
              )}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default ProfilePage;
