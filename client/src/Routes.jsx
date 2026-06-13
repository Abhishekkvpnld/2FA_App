import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import TwoFAVerification from "./components/TwoFAVerification";
import TwoFASetup from "./components/TwoFASetup";
import ProtectedRoutes from "./components/ProtectedRoutes";



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
                element: <TwoFASetup />,
                errorElement: <ErrorPage />
            },
        ]
    }

])

export default router;