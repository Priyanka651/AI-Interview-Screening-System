// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
export default function About() {
  return (
    <div
      className="font-sans text-gray-900 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/employee.jpg')" }} >
        <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-24 bg-white/80">
        <div className="px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AI Interview Screening System
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Since 2007, AI Interview Screening System has been a leading platform for AI-powered remote hiring. With extensive experience, we specialize in helping employers and candidates navigate the AI-driven interview process efficiently and reliably.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
          <div className="bg-white/80 p-8 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-orange-500">10,000,000+</h2>
            <p className="mt-2 text-gray-600">Job seekers served</p>
          </div>
          <div className="bg-white/80 p-8 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-orange-500">185,214</h2>
            <p className="mt-2 text-gray-600">Verified Remote and Flexible Jobs</p>
          </div>
          <div className="bg-white/80 p-8 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-orange-500">12,088</h2>
            <p className="mt-2 text-gray-600">Companies currently hiring</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-24 bg-gray-100/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          <div className="bg-white/80 p-8 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Explore Verified Job Listings</h3>
            <p className="text-gray-600">
              All job opportunities are screened to ensure legitimacy. You’ll only find high-quality positions—no scams or commission-only roles.
            </p>
          </div>
          <div className="bg-white/80 p-8 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Search Smarter, Apply Faster</h3>
            <p className="text-gray-600">
              Use advanced search filters to match roles with your skills and preferences. Save searches, track applications, and follow companies for updates.
            </p>
          </div>
          <div className="bg-white/80 p-8 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Access Career Support & Resources</h3>
            <p className="text-gray-600">
              Get expert guidance through webinars, guides, articles, and more, all designed to help you land the right job faster.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24">
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Benefits of Using AI Interview Screening System</h2>
          <ul className="space-y-6 text-gray-700 max-w-3xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✔</span>
              <p>High-Quality Remote & Flexible Jobs: We help people find professional, remote, and flexible jobs across multiple career fields globally.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✔</span>
              <p>Every Job & Company Researched: Our expert team screens the best opportunities and provides information on each company to help you decide.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✔</span>
              <p>High-Quality Support & Resources: Get career guidance, tools, and client support to land the remote or flexible job you want.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✔</span>
              <p>No-Risk Satisfaction Guarantee: If you’re not satisfied, request a refund within 14 days. It’s that simple.</p>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
