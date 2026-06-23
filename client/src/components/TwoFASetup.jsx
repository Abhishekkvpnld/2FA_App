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
          {/* QR Code */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
              {response?.qrCode ? (
                <img
                  src={response.qrCode}
                  alt="2FA QR Code"
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <p className="text-gray-400 text-sm">Loading QR Code...</p>
              )}
            </div>
          </div>

          {/* Secret Key */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Manual Setup Key
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                value={response?.secret || ""}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 text-sm focus:outline-none"
              />

              <button
                type="button"
                onClick={copyClipboard}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
              >
                Copy
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              If you can't scan the QR code, enter this secret key manually in your authenticator app.
            </p>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div className="mb-4 p-3 rounded-xl bg-green-50 border border-green-200">
              <p className="text-sm text-green-700">{message}</p>
            </div>
          )}

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