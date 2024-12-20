import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
  return isAdminLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
