import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      {/* White Card */}
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            The #1 job site to find vetted remote, work from home, and flexible
            job opportunities since 2007.
          </h1>
          <p className="text-gray-600 mb-6">
            Join thousands of professionals who trust us to connect them with
            legitimate, high-quality remote jobs.
          </p>
          <div className="flex flex-col gap-3">
            <button className="bg-[#008060] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006a50] transition">
              Get Started Now
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <img
            src="https://flexjobs.com/images/lp-remote-work.png"
            alt="Remote Work Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
