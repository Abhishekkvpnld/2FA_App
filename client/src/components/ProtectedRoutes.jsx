import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../context/sessionContext";

const ProtectedRoutes = () => {
  const { isLoggedIn, loading } = useSession();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          <h2 className="text-xl font-semibold text-gray-800">
            Checking Authentication
          </h2>

          <p className="text-gray-500 text-sm">
            Please wait...
          </p>
        </div>
      </div>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;