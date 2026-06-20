import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../context/sessionContext";

const ProtectedRoutes = () => {
  const { isLoggedIn } = useSession();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;