import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedin = true;

  return isLoggedin ? <Outlet/> : <Navigate to="/login" />;
}

export default ProtectedRoutes;