import { useState } from "react";
import { loginUser, registerUser } from "../services/authApi";

const LoginForm = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

      const response = await registerUser(email, password);
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
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 border">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            {isRegistered ? "Welcome Back 👋" : "Create Account 🚀"}
          </h2>

          <p className="text-gray-500 mt-2">
            {isRegistered
              ? "Sign in to access your account"
              : "Create your new account"}
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={isRegistered ? handleLogin : handleRegister}
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Username
            </label>

            <input
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="john"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Password</label>

              {isRegistered && (
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline"
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
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {!isRegistered && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>

              <input
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            {isRegistered ? "Sign In" : "Create Account"}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        {message && <p className="text-green-500 text-sm mt-4">{message}</p>}

        <p className="text-center text-gray-600 mt-6">
          {isRegistered
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsRegistered(!isRegistered)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isRegistered ? "Create Account" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;