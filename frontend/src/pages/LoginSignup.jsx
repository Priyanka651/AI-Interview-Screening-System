
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-orange-400 via-teal-400 to-blue-500">
      {/* Top Navigation */}
      <TopBar />

      {/* Main Section */}
      <main className="w-full flex flex-col items-center justify-center py-16 px-6">
        <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-teal-700 drop-shadow-md">
              {isLogin ? "Welcome Back!" : "Join Our AI Platform"}
            </h2>
            <p className="text-lg text-gray-700">
              {isLogin
                ? "Login to continue exploring AI-matched career opportunities designed for your skills."
                : "Sign up to discover jobs recommended by our AI-powered system."}
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-semibold text-center mb-6 text-orange-600">
              {isLogin ? "Login to Your Account" : "Create a New Account"}
            </h3>

            <form className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <p className="mt-6 text-center text-gray-700">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-orange-600 font-semibold hover:underline ml-1"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
