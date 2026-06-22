import { useEffect, useState } from "react";
import { setup2FA } from "../services/authApi";

const TwoFASetup = ({ onSetupComplete }) => {

  const [response, setResponse] = useState();
  const [message, setMessage] = useState()

  const fetchQRCode = async () => {
    try {
      const data = await setup2FA()
      setResponse(data)
    } catch (error) {
      setMessage(error.response.data.message)
    }
  }


  useEffect(() => {
    fetchQRCode()
  }, []);


  const copyClipboard = async () => {
    await navigator.clipboard.writeText(response?.secret);
    setMessage("Secret copied to clipboard")
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-3">
              <span className="text-2xl">🔐</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Setup Two-Factor Authentication
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Scan the QR code using Google Authenticator,
              Microsoft Authenticator, or any TOTP app.
            </p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
              <img
                src={response?.qrCode}
                alt="2FA QR Code"
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-xl p-3 mb-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Instructions
            </h3>

            <ol className="space-y-1 text-sm text-blue-800 list-decimal list-inside">
              <li>Open your authenticator app.</li>
              <li>Select "Add Account".</li>
              <li>Scan the QR code above.</li>
              <li>Enter the generated code to verify.</li>
            </ol>
          </div>

          {/* Button */}
          <button onClick={onSetupComplete} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition">
            Continue Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFASetup;