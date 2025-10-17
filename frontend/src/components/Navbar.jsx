
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 py-3">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/jobs" className="hover:text-orange-400">Jobs</Link>
        <Link to="/companies" className="hover:text-orange-400">Companies</Link>
        <Link to="/about" className="hover:text-orange-400">About</Link>
        <Link to="/contact" className="hover:text-orange-400">Contact</Link>
      </div>
    </div>
  );
}
