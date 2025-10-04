// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

export default function Contact() {
  return (
    <div
      className="font-sans text-gray-900 min-h-screen bg-center h-[500px] "
       >
<TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-24 bg-white/80"> {/* <-- CHANGE: added w-full, py-24, and /80 transparency */}
        <div className="px-6 text-center max-w-3xl mx-auto"> {/* <-- CHANGE: removed max-w-4xl from outer div, used max-w-3xl only for content */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Reach out to our customer care team for all your support needs or visit our FAQ for common questions.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full py-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-8"> {/* <-- CHANGE: added w-full and py-24 */}
        {/* Live Chat */}
        <div className="bg-white/80 p-8 rounded-lg shadow text-center"> {/* <-- CHANGE: added /80 transparency and increased padding */}
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-bold mb-2">Live Chat</h3>
          <p className="text-gray-600">Mon - Fri: 7 am - 7 pm CST</p>
          <p className="text-gray-600">Sat: 8 am - 5 pm CST</p>
          <p className="text-gray-600">Sun: 10 am - 6 pm CST</p>
          <p className="mt-2 text-gray-500 text-sm">Average response time: 1 min</p>
        </div>

        {/* Phone */}
        <div className="bg-white/80 p-8 rounded-lg shadow text-center"> {/* <-- CHANGE: added /80 transparency and increased padding */}
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-gray-600">1-866-991-9222</p>
          <p className="text-gray-600">Mon - Fri: 7 am - 7 pm CST</p>
          <p className="text-gray-600">Sat: 8 am - 5 pm CST</p>
          <p className="text-gray-600">Sun: 10 am - 6 pm CST</p>
          <p className="mt-2 text-gray-500 text-sm">Average response time: 3 min</p>
        </div>

        {/* Email */}
        <div className="bg-white/80 p-8 rounded-lg shadow text-center"> {/* <-- CHANGE: added /80 transparency and increased padding */}
          <div className="text-4xl mb-4">✉️</div>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-600">Send a message. Our team will get back to you as soon as possible.</p>
          <p className="mt-2 text-gray-500 text-sm">Average response time: 2 business days</p>
        </div>
      </section>

      {/* Other Inquiries */}
      <section className="w-full py-24 px-6 bg-gray-100/80 rounded-lg shadow mb-16"> {/* <-- CHANGE: added w-full, py-24, /80 transparency */}
        <div className="max-w-4xl mx-auto text-gray-700"> {/* <-- optional: keep content centered */}
          <h2 className="text-3xl font-bold mb-6 text-center">Other Inquiries</h2>
          <ul className="space-y-4">
            <li>
              <strong>For Employers:</strong> Please contact our dedicated Employer Services team.
            </li>
            <li>
              <strong>For Media Requests:</strong> Please visit our Media Contact page.
            </li>
            <li>
              <strong>For Affiliates:</strong> Please take this Affiliate Survey to have our Partnerships team follow up with you.
            </li>
            <li>
              <strong>Mailing Address: AIinterview@567gmail.com</strong> <br />
              Bold LLC <br />
              City View Plaza Tower II <br />
              Suite 6000 <br />
              48 Calle 165 <br />
              Sunnyvale, CA 95054
            </li>
            <li>
              <strong>Billing:</strong> Depending on where your transaction was processed, the listed merchant will either be AI Interview Screening System, AIInterviewSystem.com, BLD*AIInterviewSystem.com, or PayPal *AIInterviewSystem
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
