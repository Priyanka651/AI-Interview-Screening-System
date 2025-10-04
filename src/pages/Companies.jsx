// src/pages/Companies.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

export default function Companies() {
  return (
    <div className="w-full font-sans text-gray-900 bg-gray-50 min-h-screen">
          <TopBar />
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-white py-16 px-6">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Genuine Remote Jobs at Companies That Get It
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Save time on your job applications with AI-powered auto-apply! Browse expert-verified, scam-free jobs near you and across the globe.
            </p>
            <button className="mt-6 bg-orange-500 text-black font-bold py-3 px-6 rounded-lg shadow hover:bg-orange-600 transition duration-300">
              Start Your Remote Job Search Now!
            </button>
          </div>
        </section>

        {/* Awesome Companies Hiring */}
        <section className="w-full py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Awesome Companies Hiring for Remote Jobs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">100% Remote</h3>
              <p className="text-gray-600">No daily commute. Work from home or the location of your choice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold mb-2">Hybrid Remote</h3>
              <p className="text-gray-600">A blend of working in the office near you and working from home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Flexible Options</h3>
              <p className="text-gray-600">Mostly in-office, but with work-from-home flexibility.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose AI Interview Screening System</h2>
          <ul className="space-y-4 text-gray-700 max-w-3xl mx-auto">
            <li>✅ Personalized Tools: Save and apply to jobs, track applications, and get alerts for new roles.</li>
            <li>✅ Advanced Search Filters: Find roles that match your skills, schedule, and preferences.</li>
            <li>✅ Privacy & Support: Gain an advantage with expert guidance and client support.</li>
            <li>✅ Scam-Free Listings: We verify every job to ensure legitimacy and high-quality listings.</li>
            <li>✅ Trusted by Job Seekers Worldwide: Millions have successfully used our system to find flexible roles.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
