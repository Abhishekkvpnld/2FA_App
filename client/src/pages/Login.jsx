import React from "react";
import LoginForm from "../components/LoginForm";
import { useSession} from "../context/sessionContext"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useSession();

  const handleLoginSuccess = (userData) => {
    console.log("Received userData:", userData);

    login(userData);

    // MFA routing
    if (!userData?.isMFAEnabled) {
      navigate("/setup-2fa");
    } else {
      navigate("/verify-2fa");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full">
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </main>
  );
};


export default Login;