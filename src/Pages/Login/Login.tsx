import React, { useState } from 'react';
import { useLogin } from '../../hooks/useAuth';
import { useAuth } from '../../hooks/useLoginAuth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useLogin();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isAuthenticated);
    console.log('ok');
    await login(username, password);
    setIsAuthenticated(true);
    console.log(isAuthenticated);
    navigate('/dashboard'); // Use o hook para redirecionar
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Usuário:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
