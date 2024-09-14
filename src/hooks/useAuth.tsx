import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
  };