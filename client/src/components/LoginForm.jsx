import { useState } from "react";
import { loginUser, registerUser } from "../services/authApi";

const LoginForm = ({onLoginSuccess}) => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("abhishek");
  const [password, setPassword] = useState("Abhi@123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Login API call
    try {
      const response = await loginUser(username, password);
      setMessage(response?.message);
      setError("");
      setUsername("");
      setPassword("");
      onLoginSuccess(response?.user)
    } catch (error) {
      setUsername("");
      setPassword("");
      setError(error?.response?.data?.message || "An error occurred during login.");
      setMessage("");
    }

  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Register API call
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await registerUser(username, password);
      setMessage(response?.message);
      setError("");
    } catch (error) {
      setError(
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong"
      );
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
  <div className="relative">
    {/* Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-20"></div>

    <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
          🔐
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
          {isRegistered ? "Welcome Back" : "Create Account"}
        </h2>

        <p className="text-gray-500 mt-2">
          {isRegistered
            ? "Sign in to continue securely"
            : "Create your account in seconds"}
        </p>
      </div>

      <form
        className="space-y-5"
        onSubmit={isRegistered ? handleLogin : handleRegister}
      >
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>

          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="john_doe"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            {isRegistered && (
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700 transition"
              >
                Forgot Password?
              </button>
            )}
          </div>

          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Confirm Password */}
        {!isRegistered && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          {isLoading
            ? "Please wait..."
            : isRegistered
            ? "Sign In"
            : "Create Account"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="mt-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Success */}
      {message && (
        <div className="mt-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3">
          <p className="text-green-600 text-sm">{message}</p>
        </div>
      )}

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-xs uppercase tracking-wider text-gray-400">
          Secure Authentication
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Toggle */}
      <p className="text-center text-gray-600">
        {isRegistered
          ? "Don't have an account?"
          : "Already have an account?"}

        <button
          type="button"
          onClick={() => setIsRegistered(!isRegistered)}
          className="ml-2 text-blue-600 font-semibold hover:text-blue-700 transition"
        >
          {isRegistered ? "Create Account" : "Login"}
        </button>
      </p>
    </div>
  </div>
</div>
  );
};

export default LoginForm;