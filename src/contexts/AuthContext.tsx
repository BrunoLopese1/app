import React, { createContext, useState } from 'react';
import { ApiService } from '../services/Api';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: { name: string; email: string } | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

const apiService = new ApiService('http://localhost:3000');

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Verifica se o usuário está autenticado ao carregar o componente
  // useEffect(() => {
  //   const checkAuthStatus = async () => {
  //     const token = localStorage.getItem('token');

  //     if (token) {
  //       try {
  //         const response = await apiService.get<{ name: string; email: string }>('/user');
  //         setUser(response.data);
  //         setIsAuthenticated(true);
  //       } catch (error) {
  //         console.log(error)
  //         setUser(null);
  //         setIsAuthenticated(false);
  //       }
  //     } else {
  //       setUser(null);
  //       setIsAuthenticated(false);
  //     }
  //   };

  //   checkAuthStatus();
  // }, []);

  const login = async (email: string, password: string) => {
    try {
      await apiService.post('/auth/login', { email, password });

      const response = await apiService.get<{ name: string; email: string }>('/user');
      setUser(response.data);
      setIsAuthenticated(true);
      localStorage.setItem('token', 'YOUR_TOKEN_HERE'); // Simule o armazenamento do token
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove o token
    setUser(null);
    setIsAuthenticated(false);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
