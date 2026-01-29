
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LMSHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // clear user & token
    navigate("/courses");     // redirect to home page
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/courses" className="text-xl font-bold">
        E-Learning
      </Link>
      <nav className="space-x-4">
        <Link to="/courses">Courses</Link>
        {user && (
          <>
            <Link to="/my-learning">My Learning</Link>
            <Link to="/profile">Profile</Link>
            <button
              onClick={handleLogout}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          </>
        )}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
}
