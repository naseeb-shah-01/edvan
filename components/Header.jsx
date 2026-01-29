import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";

/* ----------------- WEBSITE LINKS ----------------- */
/* ----------------- WEBSITE LINKS ----------------- */
const WebsiteLinks = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const closeMoreTimeoutRef = useRef(null);
  const closeProgramsTimeoutRef = useRef(null);

  const handleMoreMouseEnter = () => {
    clearTimeout(closeMoreTimeoutRef.current);
    setIsMoreOpen(true);
  };

  const handleMoreMouseLeave = () => {
    closeMoreTimeoutRef.current = setTimeout(() => setIsMoreOpen(false), 200);
  };

  const handleProgramsMouseEnter = () => {
    clearTimeout(closeProgramsTimeoutRef.current);
    setIsProgramsOpen(true);
  };

  const handleProgramsMouseLeave = () => {
    closeProgramsTimeoutRef.current = setTimeout(() => setIsProgramsOpen(false), 200);
  };

  return (
    <div className="flex items-center gap-6 relative text-black font-bold">
      <Link to="/about" className="hover:text-blue-600 whitespace-nowrap">
        About Us
      </Link>

      {/* Training Programs with hover dropdown */}
      <div
        className="relative"
        onMouseEnter={handleProgramsMouseEnter}
        onMouseLeave={handleProgramsMouseLeave}
      >
        <button className="hover:text-blue-600 flex items-center gap-1 focus:outline-none whitespace-nowrap">
          Training Programs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transform transition-transform duration-300 ${
              isProgramsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isProgramsOpen && (
          <div
            className="absolute left-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg py-2 animate-slide-down z-[9999]"
            onMouseEnter={handleProgramsMouseEnter}
            onMouseLeave={handleProgramsMouseLeave}
          >
            {/* these now include a category query param */}
            <Link
  to="/programs?category=all"
  className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
>
  All Programs
</Link>
            <Link
              to="/programs?category=self-paced"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
            >
              Self Paced
            </Link>
            <Link
              to="/programs?category=diploma"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
            >
              Diploma
            </Link>
            
<Link
  to="/programs?category=upcoming"
  className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
>
  Uplcoming Programs 
</Link>
            <Link
              to="/webinars"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
            >
              Webinar & Events
            </Link>
          </div>
        )}
      </div>

      <Link
        to="/courses"
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 whitespace-nowrap"
      >
        E-Learning
      </Link>

      <a href="#contact" className="hover:text-blue-600 whitespace-nowrap">
        Contact Us
      </a>

      {/* More Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMoreMouseEnter}
        onMouseLeave={handleMoreMouseLeave}
      >
        <button className="hover:text-blue-600 flex items-center gap-1 focus:outline-none whitespace-nowrap">
          More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transform transition-transform duration-300 ${
              isMoreOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isMoreOpen && (
          <div
            className="absolute right-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg py-2 animate-slide-down z-[9999]"
            onMouseEnter={handleMoreMouseEnter}
            onMouseLeave={handleMoreMouseLeave}
          >
            <Link
              to="/placements"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
            >
              Success Stories
            </Link>
            <Link
              to="/blogs"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
            >
              Blogs
            </Link>
          </div>
        )}
      </div>

      {/* Slide Animation */}
      <style>{`
        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};


/* ----------------- LMS LINKS ----------------- */
const LMSLinks = ({ user, logout }) => (
  <>
    <Link to="/" className="hover:text-blue-600">
      Main Home
    </Link>
    <Link to="/courses" className="hover:text-blue-600">
      All Courses
    </Link>
    {user ? (
      <>
        <Link to="/my-learning" className="hover:text-blue-600">
          My Learning
        </Link>
        <Link to="/profile" className="hover:text-blue-600">
          Profile
        </Link>
        <button
          onClick={logout}
          className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link
          to="/signup"
          className="ml-4 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Signup
        </Link>
      </>
    )}
  </>
);

/* ----------------- MAIN HEADER COMPONENT ----------------- */
export default function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isLMSPath =
    location.pathname.startsWith("/courses") ||
    location.pathname.startsWith("/checkout") ||
    location.pathname.startsWith("/my-learning") ||
    location.pathname.startsWith("/profile");

  return (
    <header className="bg-white text-black shadow px-6 py-4 flex justify-between items-center relative">
      {/* The h1 styling will apply to 'E-Learning' text */}
      <h1 className="text-xl font-bold">
        <Link
          to={isLMSPath ? "/courses" : "/"}
          className={isLMSPath ? "text-blue-600" : ""} // Only apply blue text if it's an LMS path
        >
          {isLMSPath ? (
            "E-Learning"
          ) : (
            // Replaced text with your image
            <img
              src="/images/LOGO.png"
              alt="Logo"
              className="h-16 w-auto" // Set height to h-16 and width to auto
            />
          )}
        </Link>
      </h1>
      <nav className="flex items-center gap-6">
        {isLMSPath ? (
          <LMSLinks user={user} logout={logout} />
        ) : (
          <WebsiteLinks />
        )}
      </nav>
    </header>
  );
}