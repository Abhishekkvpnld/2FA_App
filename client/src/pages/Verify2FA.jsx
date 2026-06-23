import React from 'react'
import TwoFAVerification from '../components/TwoFAVerification'
import { useNavigate } from 'react-router-dom'

const Verify2FA = () => {

  const navigate = useNavigate();
  const handleTokenVerification = async (data) => {
    if (data) {
      navigate("/")
    }
  };


  const handle2FAReset = async (data) => {
    if (data) {
      navigate("/setup-2fa")
    }
  }


  return (
    <TwoFAVerification onResetSuccess={handle2FAReset} onVerifySuccess={handleTokenVerification} />
  )
}

export default Verify2FA;