import React from "react";
import { Link , useNavigate } from "react-router-dom";
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
  AccountBalance as UnitIcon,
  Assignment as MissionIcon,
  Build as EquipmentIcon,
  FitnessCenter as TrainingIcon,
  Person as ProfileIcon,
  ExitToApp as LogoutIcon,
  PeopleAlt as UserManagementIcon,
} from '@mui/icons-material';

const Sidebar = () => {
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
        <ListItem button component={Link} to="/Unit">
          <ListItemIcon><UnitIcon style={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Units" />
        </ListItem>
        <ListItem button component={Link} to="/Mission">
          <ListItemIcon><MissionIcon style={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Missions" />
        </ListItem>
        <ListItem button component={Link} to="/Equipment">
          <ListItemIcon><EquipmentIcon style={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Equipments" />
        </ListItem>
        <ListItem button component={Link} to="/Training">
          <ListItemIcon><TrainingIcon style={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Training" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon><ProfileIcon style={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/user-management">
            <ListItemIcon><UserManagementIcon style={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="User Management" />
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

export default Sidebar;
