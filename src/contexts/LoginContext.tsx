import { createContext, useState, ReactNode } from "react";

// Define a interface para o contexto de autenticação
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

// Cria o contexto com um valor padrão
export const LoginContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

// Define o tipo das props do componente LoginProvider
interface LoginProviderProps {
  children: ReactNode;
}

// Componente LoginProvider
export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
};
