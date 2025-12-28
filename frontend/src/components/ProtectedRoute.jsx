import { useContext } from "react";
import { StoreContext } from "../store/Store";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useContext(StoreContext);
  if (!authenticated) <Navigate to="/" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
