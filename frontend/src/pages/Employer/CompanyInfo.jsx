// import React, { useState } from "react";
// import TopBar from "../components/TopBar";
// import Footer from "../components/Footer";

// export default function CompanyInfoBilling() {
//   const [activeTab, setActiveTab] = useState("company");

//   return (
//     <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-orange-400 via-teal-400 to-blue-500 text-gray-900">
//       <TopBar />

//       <main className="flex-grow flex items-center justify-center p-6">
//         <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12">
//           {/* Tabs */}
//           <div className="flex justify-center mb-8 border-b-2 border-gray-200">
//             <button
//               onClick={() => setActiveTab("company")}
//               className={`py-2 px-6 text-lg font-semibold transition ${
//                 activeTab === "company"
//                   ? "border-b-4 border-orange-500 text-orange-600"
//                   : "text-gray-500 hover:text-orange-500"
//               }`}
//             >
//               🏢 Company Info
//             </button>
//             <button
//               onClick={() => setActiveTab("billing")}
//               className={`py-2 px-6 text-lg font-semibold transition ${
//                 activeTab === "billing"
//                   ? "border-b-4 border-orange-500 text-orange-600"
//                   : "text-gray-500 hover:text-orange-500"
//               }`}
//             >
//               💳 Billing
//             </button>
//           </div>

//           {/* Company Info Tab */}
//           {activeTab === "company" && (
//             <div className="space-y-6">
//               <h2 className="text-2xl font-bold text-teal-700 text-center">
//                 Company Information
//               </h2>
//               <p className="text-center text-gray-700">
//                 Tell us about your organization. This info will appear on your job postings.
//               </p>

//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Company Name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                 />
//                 <textarea
//                   placeholder="Company Description"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 focus:ring-2 focus:ring-orange-500 outline-none"
//                 ></textarea>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Industry (e.g. Technology, Finance)"
//                     className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Company Size (e.g. 11–50 employees)"
//                     className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Headquarters Location"
//                     className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Website or LinkedIn URL"
//                     className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-1 font-medium">
//                     Upload Company Logo
//                   </label>
//                   <input
//                     type="file"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2"
//                   />
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setActiveTab("billing")}
//                   className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
//                 >
//                   Next: Go to Billing →
//                 </button>
//               </form>
//             </div>
//           )}

//           {/* Billing Tab */}
//           {activeTab === "billing" && (
//             <div className="space-y-6">
//               <h2 className="text-2xl font-bold text-teal-700 text-center">
//                 Billing Information
//               </h2>
//               <p className="text-center text-gray-700">
//                 Add your payment details and choose your subscription plan.
//               </p>

//               <form className="space-y-4">
//                 <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none">
//                   <option>Select Plan</option>
//                   <option>Free Plan</option>
//                   <option>Standard - $29/month</option>
//                   <option>Premium - $59/month</option>
//                 </select>

//                 <input
//                   type="text"
//                   placeholder="Cardholder Name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Card Number (XXXX XXXX XXXX XXXX)"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                 />

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Expiry (MM/YY)"
//                     className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                   <input
//                     type="password"
//                     placeholder="CVV"
//                     className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Country"
//                     className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Billing Address"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//                 />

//                 <div className="flex justify-between">
//                   <button
//                     type="button"
//                     onClick={() => setActiveTab("company")}
//                     className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
//                   >
//                     ← Back
//                   </button>

//                   <button
//                     type="submit"
//                     className="px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
//                   >
//                     Complete Registration
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
import React from "react";
import Input from "./Input"; // Reuse your Input component

const CompanyInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Company Information</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input label="Company Name" required />
        <Input label="Company Website" placeholder="https://www.company.com" type="url" required />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input label="Industry" required />
        <Input label="Number of Employees" type="number" required />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <label className="block text-sm font-medium mb-1">Company Description</label>
        <textarea
          className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          rows="4"
          placeholder="Briefly describe your company..."
          required
        />
      </div>

      <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
              >
        Save Company Info
      </button>
    </div>
  );
};

export default CompanyInfo;
