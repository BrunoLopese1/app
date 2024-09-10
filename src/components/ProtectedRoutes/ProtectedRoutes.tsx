// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // if (!isAuthenticated) {
  //   // Redireciona para a página de login e mantém o local de origem
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  // Renderiza o conteúdo protegido
  return <Outlet />;
};

export default ProtectedRoute;

