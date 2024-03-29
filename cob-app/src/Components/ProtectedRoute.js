// ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';


const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = true;

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
