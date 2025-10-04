

import React, { useState } from "react";


const EmployerSignup = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 = Sign Up

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: `url('/bg_emp.jpg')` }}
    >
      <div className="flex w-full max-w-6xl gap-16 pr-8">
        {/* Left Section (Text Only) */}
        <div className="flex-1 text-black">
          <h2 className="text-3xl font-bold mb-4">
            Hiring for <span className="text-red-500">Remote</span> or{" "}
            <span className="text-red-500">Hybrid</span> Roles?
          </h2>
          <p className="mb-4">
            AI Interview Screening System is the best and most experienced job
            platform specializing in the remote and flexible job market since
            2007.
          </p>
          <p>
            We work with top employers, so whether you're a start-up or a
            Fortune 500, hiring in the U.S. or internationally, or a
            remote-only, remote-first, or hybrid workplace,{" "}
            <strong>we're here to help!</strong>
          </p>
        </div>

        {/* Right Section (Form in White Box) */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-300">
            <button
              type="button"
              className={`px-4 py-2 font-medium ${
                activeTab === 1
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium ${
                activeTab === 2
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Company Info
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium ${
                activeTab === 3
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Billing
            </button>
          </div>

          {/* Form content - only show Sign Up form for now */}
          {activeTab === 1 && (
            <>
              <h3 className="text-xl font-bold mb-4">
                To Get Started, Enter Your Company Information
              </h3>

              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
              </div>

              {/* Company + Website */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Company Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.company.com/"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
              </div>

              {/* Job Title + Work Email */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
              </div>

              {/* Password + Referral */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    How did you hear about Flex Jobs?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded p-2" required>
                    <option value="">Select</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Job Search">Job Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend">Friend</option>
                  </select>
                </div>
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" id="newsletter" />
                <label htmlFor="newsletter">
                  Subscribe to our monthly Employer Newsletter
                </label>
              </div>

              {/* Terms */}
              <p className="text-sm mb-4">
                By Clicking <strong>"Sign up Today!"</strong> you also agree to
                our{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>{" "}
                and to receive email updates. You can unsubscribe anytime.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
              >
                Sign Up Today!
              </button>
            </>
          )}

          {/* Placeholder for other tabs */}
          {activeTab === 2 && (
            <p className="text-gray-500">Company Info form will go here.</p>
          )}
          {activeTab === 3 && (
            <p className="text-gray-500">Billing form will go here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerSignup;
