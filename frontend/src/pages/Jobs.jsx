// src/pages/Jobs.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

export default function Jobs() {
  return (
    <div className="w-full font-sans min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-white shadow py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Genuine Remote Jobs
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Stress less. Browse and apply to expert-verified, scam-free jobs near you and across the globe.
        </p>
        <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition">
          Start Your Remote Job Search Now!
        </button>
      </section>

      {/* How It Works / Tools */}
      <section className="w-full py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Personalized Tools to Save Time</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Save Time with Auto-Apply</h3>
            <p>Apply to jobs faster with automated tools and track applications with ease.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Advanced Search Filters</h3>
            <p>Filter jobs by your skills, schedule, location, and remote flexibility.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Privacy & Support</h3>
            <p>Access expert guidance, support, and resources for your job search.</p>
          </div>
        </div>
      </section>

      {/* Types of Remote Work */}
      <section className="w-full bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">What Kind of Remote Work Are You Looking For?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-semibold mb-2">100% Remote</h3>
            <p>No daily commute. Work from home or the location of your choice.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-semibold mb-2">Hybrid Remote</h3>
            <p>A blend of working in the office and from home.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-semibold mb-2">Option for Remote</h3>
            <p>Mostly in-office but offers work-from-home flexibility.</p>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="w-full py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Avoid Scams & Junk</h2>
        <p className="mb-6">
          We verify 100% of our job listings to ensure you only see legitimate, professional opportunities.
        </p>
        <p>
          Over 10 million job seekers have trusted AI Interview Screening System since 2007 to find a better way to work.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
