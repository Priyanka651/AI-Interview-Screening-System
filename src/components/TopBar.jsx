// import React from "react";
// import logo from "../assets/logo.png"; 
// import { Search } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function TopBar() {
//   return (
//     <header className="w-full shadow-sm">
//       {/* Top Section */}
//       <div className="flex items-center justify-between bg-white px-6 py-3">
//         {/* Left: Logo + Tagline */}
//         <div className="flex items-center space-x-3">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-6 h-auto"
//             style={{ width: "120px", height: "auto" }}
//           />
//           <span className="text-orange-500 font-semibold text-lg">
//             Get jobs by your AI assistant
//           </span>
//         </div>

//         {/* Right: Search boxes */}
//         <div className="flex border rounded overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search by job title, keyword, etc."
//             className="px-3 py-2 w-64 outline-none border border-gray-300 text-gray-800 placeholder-gray-500"
//           />
//           <input
//             type="text"
//             placeholder="Search by location"
//             className="px-3 py-2 w-48 border border-gray-300 border-l text-gray-800 placeholder-gray-500"
//           />
//           <button className="bg-orange-500 text-black px-4 flex items-center justify-center hover:bg-orange-600">
//             <Search size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Menu Bar */}
//       <nav className="bg-teal-800 text-white">
//         <ul className="flex items-center justify-between px-6 py-2 text-sm font-medium w-full">
//           <li className="hover:text-orange-300 cursor-pointer">
//             Find Remote, Hybrid, & Flexible Jobs
//           </li>
//           <li className="hover:text-orange-300 cursor-pointer">
//             How AIonJobs Works
//           </li>
//           <li className="hover:text-orange-300 cursor-pointer">Career Advice</li>
//           <li className="hover:text-orange-300 cursor-pointer">
//             Events & Webinars
//           </li>
//           <li className="hover:text-orange-300 cursor-pointer">
//             Job Search Articles
//           </li>

//           {/* Right side group */}
//           <li>
//             <div className="flex items-center space-x-4">
//               <span className="hover:text-orange-300 cursor-pointer">
//                 For Employers
//               </span>
//               {/* Updated: Login link */}
//               <Link
//                 to="/auth"
//                 className="hover:text-orange-300 font-semibold cursor-pointer"
//               >
//                 Log In / Sign Up
//               </Link>
//             </div>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }



// src/components/TopBar.jsx
import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <header className="w-full shadow-sm">
      <div className="flex items-center justify-between bg-white px-6 py-3">
        <div className="flex items-center space-x-3">
          {/* public/logo.png */}
          <img src="/logo.png" alt="Logo" className="w-28 h-auto" />
          <span className="text-orange-500 font-semibold text-lg">Get jobs by your AI assistant</span>
        </div>

        <div className="flex border rounded overflow-hidden">
          <input type="text" placeholder="Search by job title, keyword, etc." className="px-3 py-2 w-64 outline-none border border-gray-300 placeholder-gray-500" />
          <input type="text" placeholder="Search by location" className="px-3 py-2 w-48 border border-gray-300 border-l placeholder-gray-500" />
          <button className="bg-orange-500 text-black px-4 flex items-center justify-center hover:bg-orange-600">
            <Search size={18} />
          </button>
        </div>
      </div>

      <nav className="bg-teal-800 text-white">
        <ul className="flex items-center justify-between px-6 py-2 text-sm font-medium w-full">
          <li className="hover:text-orange-300 cursor-pointer">Find Remote, Hybrid, & Flexible Jobs</li>
          <li className="hover:text-orange-300 cursor-pointer">How AIonJobs Works</li>
          <li className="hover:text-orange-300 cursor-pointer">Career Advice</li>
          <li className="hover:text-orange-300 cursor-pointer">Events & Webinars</li>
          <li className="hover:text-orange-300 cursor-pointer">Job Search Articles</li>

          <li>
            <div className="flex items-center space-x-4">
              <Link to="/employer" className="hover:text-orange-300 cursor-pointer">For Employers</Link>
              <Link to="/auth" className="hover:text-orange-300 font-semibold cursor-pointer">Log In / Sign Up</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
