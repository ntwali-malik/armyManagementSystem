import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../service/UsersService";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  Box,
  Button,
} from '@mui/material';
import {
  Group as GroupIcon,
  Person as ProfileIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';

const UserSideBar = () => {
  const isAuthenticated = UserService.isAuthenticated();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout this user?");
    if (confirmLogout) {
      UserService.logout();
      navigate('/');
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        style: {
          backgroundColor: "#073618",
          width: "300px",
          color: "#fff",
        }
      }}
    >
      <Box textAlign="center" py={2}>
        <Typography variant="h5" component="h1">
          Army System
        </Typography>
      </Box>
      <Divider style={{ backgroundColor: "#fff" }} />
      <List>
        <ListItem button component={Link} to="/Soldier">
          <ListItemIcon><GroupIcon style={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Soldiers" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon><ProfileIcon style={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
      <Divider style={{ backgroundColor: "#fff" }} />
      {isAuthenticated && (
        <Box textAlign="center" py={2}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      )}
    </Drawer>
  );
};

export default UserSideBar;
