import React from "react";
import { Link } from "react-router-dom";
import { useSession } from "../context/sessionContext";
import { logoutUser } from "../services/authApi";


const HomePage = () => {
  const { user, logout } = useSession();

  const handleLogout = async () => {
    try {
      const data = await logoutUser()
      logout(data);
      Navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white w-[100vw]">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Auth<span className="text-cyan-400">App</span>
          </h1>

          <div className="flex items-center gap-4">
            {/* Username */}
            <div className="hidden sm:flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-slate-950">
                {user?.username?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <div>
                <p className="text-xs text-slate-400">Logged in as</p>
                <p className="font-medium">
                  {user?.username || "User"}
                </p>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-xl font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-cyan-500/10 rounded-3xl flex items-center justify-center">
          <span className="text-5xl">🔐</span>
        </div>

        <h1 className="text-5xl font-bold mb-4">
          Welcome Back,{" "}
          <span className="text-cyan-400">
            {user?.username || "User"}
          </span>
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          Your authentication system is protected with
          JWT, Passport.js and Two-Factor Authentication.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/setup-2fa"
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold"
          >
            Setup 2FA
          </Link>

          <Link
            to="/verify-2fa"
            className="border border-slate-700 px-6 py-3 rounded-xl hover:border-cyan-400"
          >
            Verify 2FA
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;