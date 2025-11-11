import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "@/mocker/UserMocker.ts";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: any;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

/*
Tip: permet de fournir des données effecicé à tout les childrens.
sans passer les données par les props.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  //navigate in app
  const navigate = useNavigate();

  /*
  login user
   */
  const login = (user: User) => {
    setUser(user);
    navigate("/dashboard");
  }

  /*
  Logout user
   */
  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{user, login, logout}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }

  return context;
};