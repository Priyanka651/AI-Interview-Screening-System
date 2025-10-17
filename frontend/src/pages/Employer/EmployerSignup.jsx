
import React, { useState } from "react";
 import TopBar from "../../components/TopBar";
 import Footer from "../../components/Footer";

import Input from "./Input";
import CompanyInfo from "./CompanyInfo";
import Billing from "./Billing";

const EmployerSignup = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="relative w-full min-h-screen font-sans text-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_emp.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main content */}
      <div className="relative z-10">
        <TopBar />

        <main className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-6">
          {/* Left Section */}
          <div className="md:w-1/2 w-full space-y-4 text-center md:text-left px-4 md:px-16 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Hiring for <span className="text-red-700">Remote</span> or{" "}
              <span className="text-red-700">Hybrid</span> Roles?
            </h2>
            <p className="text-lg">
              AI Interview Screening System is the best and most experienced job platform specializing in remote and flexible jobs since 2025.
            </p>
            <p className="text-lg">
              We work with top employers, whether you're a start-up or Fortune 500, hiring in the U.S. or internationally. <strong>We’re here to help!</strong>
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 w-full bg-white p-8 md:p-16 rounded-xl shadow-2xl border border-gray-200 mt-8 md:mt-0">
            {/* Tabs */}
            <div className="flex mb-6 border-b border-gray-300">
              {["Sign Up", "Company Info", "Billing"].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i + 1)}
                  className={`px-6 py-2 font-semibold transition ${
                    activeTab === i + 1
                      ? "border-b-2 border-orange-500 text-orange-500"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="overflow-hidden">
              {activeTab === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">
                    To Get Started, Enter Your Company Information
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Input label="First Name" required />
                    <Input label="Last Name" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Input label="Job Title" required />
                    <Input label="Work Email Address" type="email" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Input label="Password" type="password" required />
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        How did you hear about Flex Jobs? <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none">
                        <option value="">Select</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Job Search">Job Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend">Friend</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <input type="checkbox" className="mr-2" id="newsletter" />
                    <label htmlFor="newsletter" className="text-sm">
                      Subscribe to our monthly Employer Newsletter
                    </label>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">
                    By Clicking <strong>"Sign up Today!"</strong> you also agree to our{" "}
                    <a href="#" className="text-blue-500 underline">Terms of Use</a> and{" "}
                    <a href="#" className="text-blue-500 underline">Privacy Policy</a>, and to receive email updates.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
                  >
                    Sign Up Today!
                  </button>
                </div>
              )}

              {activeTab === 2 && <CompanyInfo />}
              {activeTab === 3 && <Billing />}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default EmployerSignup;
