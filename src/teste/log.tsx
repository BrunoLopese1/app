import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Lógica de autenticação
    // Se sucesso:
    history.push('/app/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginPage;
