import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRoute = { children: ReactNode };
const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
