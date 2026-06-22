import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import TwoFAVerification from "./components/TwoFAVerification";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Setup2FA from "./pages/Setup2FA";



const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        element: <ProtectedRoutes/>,
        children: [
            {
                path: "/",
                element: <HomePage />,
                errorElement: <ErrorPage />
            },
            {
                path: "/verify-2fa",
                element: <TwoFAVerification />,
                errorElement: <ErrorPage />
            },
            {
                path: "/setup-2fa",
                element: <Setup2FA />,
                errorElement: <ErrorPage />
            },
        ]
    }

])

export default router;