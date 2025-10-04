import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-600">AI Recruiter</div>
      <nav className="space-x-6">
        <a href="#jobs" className="text-gray-700 hover:text-blue-600">
          Jobs
        </a>
        <a href="#features" className="text-gray-700 hover:text-blue-600">
          Features
        </a>
        <a href="#about" className="text-gray-700 hover:text-blue-600">
          About
        </a>
      </nav>
      <div className="space-x-3">
        <button className="px-4 py-2 text-sm border rounded-lg text-gray-700 hover:bg-gray-100">
          Log In
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
