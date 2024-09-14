import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useLoginAuth';

const ProtectedRoute: React.FC = () => {
const isAuthenticated = useAuth();

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se o usuário estiver autenticado, renderiza o conteúdo protegido
  return <Outlet />;
};

export default ProtectedRoute;

