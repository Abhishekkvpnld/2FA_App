import { useState } from "react";
import { reset2FA, verify2FA } from "../services/authApi";

const TwoFAVerification = ({
  onVerifySuccess,
  onResetSuccess,
}) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    setError("");

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    try {
      setLoading(true);

      const data = await verify2FA(otp);

      if (onVerifySuccess) {
        onVerifySuccess(data);
      }
    } catch (err) {
      setOtp("");

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await reset2FA();

      if (onResetSuccess) {
        onResetSuccess(data);
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to reset 2FA"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
            <span className="text-3xl">🛡️</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Verify Authentication
          </h1>

          <p className="text-gray-500 mt-3">
            Enter the 6-digit code from your authenticator app.
          </p>
        </div>

        {/* OTP Input */}
        <form onSubmit={handleVerify}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Authentication Code
            </label>

            <input
              type="text"
              value={otp}
              maxLength={6}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, ""))
              }
              placeholder="123456"
              className="w-full px-4 py-3 text-center text-2xl tracking-[0.5em] font-semibold border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200">
              <p className="text-red-600 text-sm text-center">
                {error}
              </p>
            </div>
          )}

          {/* Verify Button */}
          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-xl transition mb-3"
          >
            {loading ? "Verifying..." : "Verify Code"}
          </button>
        </form>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full border border-red-300 cursor-pointer text-red-600 hover:bg-red-500 hover:text-white font-semibold py-3 rounded-xl transition"
        >
          Reset 2FA
        </button>

        {/* Info */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Lost access to your authenticator app? Use the reset option to
          configure 2FA again.
        </p>
      </div>
    </div>
  );
};

export default TwoFAVerification;