import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50">
      {/* Left text */}
      <div className="max-w-lg space-y-6 text-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Find Genuine <span className="text-red-500">Remote Jobs</span> at Companies That Get It
        </h1>
        <p className="text-gray-700">
          Stress less. Browse and apply to expert-verified, scam-free jobs near you and across the globe.
        </p>
        <button className="bg-orange-500 text-black px-6 py-3 rounded-lg shadow hover:bg-orange-600">
          Start Your Remote Job Search Now!
        </button>
      </div>

      {/* Right image */}
      <div className="mt-10 md:mt-0">
        <img
          src=".\src\assets\header.webp"
          alt="Remote Work"
          className="w-[800px] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
