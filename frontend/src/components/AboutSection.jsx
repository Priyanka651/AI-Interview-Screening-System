import React from "react";
import Aijob from "../assets/AI.png";

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 px-8 py-16">
      <div className="flex-1">
        <img
          src={Aijob}
          alt="Founder"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">Over 10 Million Job Seekers</h2>
        <p className="text-gray-600">
          AI Based Interview Jobs has been helping people find professional, legitimate remote jobs since 2025.
        </p>
    <button
  className="w-full text-white py-3 rounded-lg font-semibold text-lg shadow-md 
             bg-gradient-to-r from-orange-400 to-teal-400
             hover:from-orange-500 hover:to-teal-500 transition-all duration-300"
>
  Start Your Remote Job Search Now!
</button>

      </div>
    </section>
  );
}



