// import React, { useState } from "react";

// const EmployerSignup = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div
//       className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
//       style={{
//         backgroundImage: `url('/bg_emp.jpg')`,
//       }}
//     >
//       {/* Darker Overlay for Better Contrast */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

//       {/* Main Content */}
//       <div className="relative w-full max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-start gap-10 z-10">
//         {/* Left Section */}
//         <div className="flex-1 text-white drop-shadow-md">
//           <h2 className="text-4xl font-bold mb-6 leading-snug">
//             Hiring for <span className="text-orange-400">Remote</span> or{" "}
//             <span className="text-orange-400">Hybrid</span> Roles?
//           </h2>
//           <p className="text-lg mb-4">
//             AI Interview Screening System is the best and most experienced job
//             platform specializing in the remote and flexible job market since
//             2025.
//           </p>
//           <p className="text-lg">
//             We work with top employers, so whether you're a start-up or a
//             Fortune 500, hiring in the U.S. or internationally, or a remote-only,
//             remote-first, or hybrid workplace,{" "}
//             <strong>we're here to help!</strong>
//           </p>
//         </div>

//         {/* Right Section - Form */}
//         <div className="flex-1 bg-white p-10 rounded-2xl shadow-2xl">
//           {/* Tabs */}
//           <div className="flex mb-6 border-b border-gray-300">
//             {["Sign Up", "Company Info", "Billing"].map((tab, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActiveTab(i + 1)}
//                 className={`px-6 py-2 font-semibold transition ${
//                   activeTab === i + 1
//                     ? "border-b-2 border-orange-500 text-orange-500"
//                     : "text-gray-400 hover:text-orange-500"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Sign Up Form */}
//           {activeTab === 1 && (
//             <>
//               <h3 className="text-xl font-bold mb-4">
//                 To Get Started, Enter Your Company Information
//               </h3>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="First Name" required />
//                 <Input label="Last Name" required />
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="Company Name" required />
//                 <Input
//                   label="Company Website"
//                   type="url"
//                   placeholder="https://www.company.com/"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="Job Title" required />
//                 <Input label="Work Email Address" type="email" required />
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="Password" type="password" required />
//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     How did you hear about Flex Jobs?{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <select className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none">
//                     <option value="">Select</option>
//                     <option value="LinkedIn">LinkedIn</option>
//                     <option value="Job Search">Job Search</option>
//                     <option value="Social Media">Social Media</option>
//                     <option value="Friend">Friend</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex items-center mb-4">
//                 <input type="checkbox" className="mr-2" id="newsletter" />
//                 <label htmlFor="newsletter" className="text-sm text-gray-700">
//                   Subscribe to our monthly Employer Newsletter
//                 </label>
//               </div>

//               <p className="text-sm text-gray-600 mb-6">
//                 By Clicking <strong>"Sign up Today!"</strong> you also agree to
//                 our{" "}
//                 <a href="#" className="text-blue-500 underline">
//                   Terms of Use
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-500 underline">
//                   Privacy Policy
//                 </a>{" "}
//                 and to receive email updates. You can unsubscribe anytime.
//               </p>

//               {/* Visible Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
//               >
//                 Sign Up Today!
//               </button>
//             </>
//           )}

//           {activeTab === 2 && (
//             <p className="text-gray-500">Company Info form will go here.</p>
//           )}
//           {activeTab === 3 && (
//             <p className="text-gray-500">Billing form will go here.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Input = ({ label, type = "text", placeholder, required }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       type={type}
//       placeholder={placeholder}
//       className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
//       required={required}
//     />
//   </div>
// );

// export default EmployerSignup;







import React, { useState } from "react";
import Input from "./Input";
import CompanyInfo from "./CompanyInfo";
import Billing from "./Billing";

const EmployerSignup = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Set a fixed min-height (adjust as needed)
  const formMinHeight = "min-h-[600px]";

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg_emp.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-start gap-10">
        {/* Left Section */}
        <div className="flex-1 text-black">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Hiring for <span className="text-red-500">Remote</span> or{" "}
            <span className="text-red-500">Hybrid</span> Roles?
          </h2>
          <p className="text-lg mb-4">
            AI Interview Screening System is the best and most experienced job
            platform specializing in the remote and flexible job market since 2025.
          </p>
          <p className="text-lg">
            We work with top employers, so whether you're a start-up or a
            Fortune 500, hiring in the U.S. or internationally, or a remote-only,
            remote-first, or hybrid workplace, <strong>we're here to help!</strong>
          </p>
        </div>

        {/* Right Section - Form */}
        <div className={`flex-1 bg-white p-10 rounded-2xl shadow-2xl ${formMinHeight}`}>
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
      </div>
    </div>
  );
};

export default EmployerSignup;




















// import React, { useState } from "react";

// const EmployerSignup = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div
//       className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: `url('/bg_emp.jpg')`,
//       }}
//     >
//       {/* Overlay for light contrast */}
//       <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

//       {/* Main content wrapper */}
//       <div className="relative w-full max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-start gap-10">
//         {/* Left Section - Text */}
//         <div className="flex-1 text-black">
//           <h2 className="text-4xl font-bold mb-6 leading-snug">
//             Hiring for <span className="text-red-500">Remote</span> or{" "}
//             <span className="text-red-500">Hybrid</span> Roles?
//           </h2>
//           <p className="text-lg mb-4">
//             AI Interview Screening System is the best and most experienced job
//             platform specializing in the remote and flexible job market since
//             2025.
//           </p>
//           <p className="text-lg">
//             We work with top employers, so whether you're a start-up or a
//             Fortune 500, hiring in the U.S. or internationally, or a remote-only,
//             remote-first, or hybrid workplace,{" "}
//             <strong>we're here to help!</strong>
//           </p>
//         </div>

//         {/* Right Section - Form */}
//         <div className="flex-1 bg-white p-10 rounded-2xl shadow-2xl">
//           {/* Tabs */}
//           <div className="flex mb-6 border-b border-gray-300">
//             {["Sign Up", "Company Info", "Billing"].map((tab, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActiveTab(i + 1)}
//                 className={`px-6 py-2 font-semibold transition ${
//                   activeTab === i + 1
//                     ? "border-b-2 border-orange-500 text-orange-500"
//                     : "text-gray-400 hover:text-orange-500"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Sign Up Form */}
//           {activeTab === 1 && (
//             <>
//               <h3 className="text-xl font-bold mb-4">
//                 To Get Started, Enter Your Company Information
//               </h3>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="First Name" required />
//                 <Input label="Last Name" required />
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="Company Name" required />
//                 <Input
//                   label="Company Website"
//                   type="url"
//                   placeholder="https://www.company.com/"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="Job Title" required />
//                 <Input label="Work Email Address" type="email" required />
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <Input label="Password" type="password" required />
//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     How did you hear about Flex Jobs?{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <select className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none">
//                     <option value="">Select</option>
//                     <option value="LinkedIn">LinkedIn</option>
//                     <option value="Job Search">Job Search</option>
//                     <option value="Social Media">Social Media</option>
//                     <option value="Friend">Friend</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex items-center mb-4">
//                 <input type="checkbox" className="mr-2" id="newsletter" />
//                 <label htmlFor="newsletter" className="text-sm">
//                   Subscribe to our monthly Employer Newsletter
//                 </label>
//               </div>

//               <p className="text-sm text-gray-600 mb-6">
//                 By Clicking <strong>"Sign up Today!"</strong> you also agree to
//                 our{" "}
//                 <a href="#" className="text-blue-500 underline">
//                   Terms of Use
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-500 underline">
//                   Privacy Policy
//                 </a>{" "}
//                 and to receive email updates. You can unsubscribe anytime.
//               </p>

//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition"
//               >
//                 Sign Up Today!
//               </button>
//             </>
//           )}

//           {activeTab === 2 && (
//             <p className="text-gray-500">Company Info form will go here.</p>
//           )}
//           {activeTab === 3 && (
//             <p className="text-gray-500">Billing form will go here.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Input = ({ label, type = "text", placeholder, required }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       type={type}
//       placeholder={placeholder}
//       className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
//       required={required}
//     />
//   </div>
// );

// export default EmployerSignup;
