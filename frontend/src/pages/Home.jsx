import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import RemoteOptions from "../components/RemoteOptions";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Reviews />
      <RemoteOptions />
      <AboutSection />
      <Footer /> 
    </div>
  );
}
