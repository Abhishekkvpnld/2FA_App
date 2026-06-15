import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">
            Auth<span className="text-slate-900">App</span>
          </h1>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                🔐 Secure Authentication System
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                Authentication
                <span className="block text-blue-600">
                  Made Simple
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                A modern authentication platform with secure login,
                registration, JWT authentication, protected routes,
                form validation, and user management.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl text-center font-semibold hover:bg-blue-700 transition"
                >
                  Create Account
                </Link>

                <Link
                  to="/login"
                  className="px-8 py-4 border rounded-xl text-center font-semibold hover:bg-slate-50 transition"
                >
                  Sign In
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-2xl font-bold">10K+</h3>
                  <p className="text-slate-500">Active Users</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">99.9%</h3>
                  <p className="text-slate-500">Secure Access</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">24/7</h3>
                  <p className="text-slate-500">Availability</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl">
                    🔒
                  </div>
                </div>

                <h2 className="text-center text-2xl font-bold">
                  Welcome Back
                </h2>

                <p className="text-center text-slate-500 mt-2">
                  Securely access your account
                </p>

                <div className="mt-8 space-y-4">
                  <div className="h-12 bg-slate-100 rounded-xl"></div>
                  <div className="h-12 bg-slate-100 rounded-xl"></div>

                  <div className="h-12 bg-blue-600 rounded-xl"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="font-semibold">JWT</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Token Security
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h4 className="font-semibold">Protected</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Route Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Everything You Need
            </h2>

            <p className="text-slate-600 mt-4">
              Build a secure authentication system quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: "JWT Authentication",
                icon: "🔑",
                desc: "Secure token-based authentication and authorization.",
              },
              {
                title: "Protected Routes",
                icon: "🛡️",
                desc: "Restrict pages and resources to authorized users.",
              },
              {
                title: "Validation",
                icon: "✅",
                desc: "Strong client-side and server-side validation.",
              },
              {
                title: "Fast API",
                icon: "⚡",
                desc: "Built with Node.js and Express for performance.",
              },
              {
                title: "MongoDB Storage",
                icon: "💾",
                desc: "Reliable and scalable user data management.",
              },
              {
                title: "Responsive UI",
                icon: "📱",
                desc: "Works perfectly on mobile, tablet, and desktop.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="text-xl font-semibold mt-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 mt-3">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">
            Start Your Journey Today
          </h2>

          <p className="text-slate-600 mt-4">
            Join thousands of users using secure authentication.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
          © {new Date().getFullYear()} AuthApp. Built with React, Node.js &
          MongoDB.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;