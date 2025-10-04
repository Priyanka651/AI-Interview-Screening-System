import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginSignup from "./pages/LoginSignup";
import EmployerSignup from "./pages/Employer/EmployerSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/employer" element={<EmployerSignup />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import EmployerSignup from "./pages/Employer/EmployerSignup";


// // Pages
// import Home from "./pages/Home";
// import LoginSignup from "./pages/LoginSignup";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Home / Landing Page */}
//         <Route path="/" element={<Home />} />

        

//         {/* Login / Signup Page */}
//         <Route path="/auth" element={<LoginSignup />} />

//         {/*employer signup*/}
//           <Route path="/employer" element={<EmployerSignup />} />


//       </Routes>
//     </Router>
//   );
// }

// export default App;




