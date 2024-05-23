import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UserService from '../service/UsersService';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  const isAuthenticated = UserService.isAuthenticated();
  const userRole = UserService.getRole();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;