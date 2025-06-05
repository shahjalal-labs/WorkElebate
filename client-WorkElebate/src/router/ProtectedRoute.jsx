import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user, "ProtectedRoute.jsx", 6);
  if (!user) return <Navigate to="/auth/signin"></Navigate>;
  return children;
};

export default ProtectedRoute;
