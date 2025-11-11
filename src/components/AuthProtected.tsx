import { useAuth } from "@/contexts/authContext.tsx";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const AuthProtected = ({ children }: { children: ReactNode }) => {
  const {user} = useAuth();

  if(!user){
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      {children}
    </>
  );
};

export default AuthProtected;