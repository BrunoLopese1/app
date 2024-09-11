// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ApiService } from '../services/Api';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: { name: string; email: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const apiService = new ApiService('http://localhost:3000');

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const { isError } = useQuery('user', async () => {
    const response = await apiService.get<{ name: string; email: string }>('/user');
    return response.data;
  }, {
    retry: false,
    onSuccess: (data) => setUser(data),
    onError: () => setUser(null)
  });
  

  const isAuthenticated = !!user;
  console.log(isAuthenticated)

  const login = async (email: string, password: string) => {
    try {
      await apiService.post('/auth/login', { email, password });
  
      // Obter dados do usuário após o login
      const response = await apiService.get<{ name: string; email: string }>('/user');
      setUser(response.data);
  
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };
  

  const logout = () => {
    document.cookie = 'token=; Max-Age=0'; // Remove o cookie de autenticação
    setUser(null);
    window.location.href = '/login';
  };

  useEffect(() => {
    if (isError) {
      setUser(null);
    }
  }, [isError]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
