import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return !!isLoggedIn;
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
