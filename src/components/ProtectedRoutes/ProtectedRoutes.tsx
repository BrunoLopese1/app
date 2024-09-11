// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <div>Loading...</div>; // Ou qualquer indicador de carregamento
  }

  if (!isAuthenticated) {
    alert("não");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;


