import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export const useAuth = () => {
    const context = useContext(LoginContext);
  
    if (!context) {
      throw new Error("useAuth must be used within a LoginProvider");
    }
  
    return context;
  };