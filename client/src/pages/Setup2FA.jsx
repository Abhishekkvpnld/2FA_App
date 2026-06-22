import React from "react";
import TwoFASetup from "../components/TwoFASetup";
import { useNavigate } from "react-router-dom";

const Setup2FA = () => {

  const navigate = useNavigate();

  const handleSetupComplete = () => {
    navigate("/verify-2fa")
  }

  return (
    <div className="min-h-screen min-w-[100vw] bg-slate-100 flex items-center justify-center p-4">
      <TwoFASetup onSetupComplete={handleSetupComplete} />
    </div>
  );
};

export default Setup2FA;