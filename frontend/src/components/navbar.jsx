import { AvatarIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";  
import { Link } from "react-router-dom";
import { checkAuth, getUserProfile } from "../api/auth/util";
import { useAuthStore } from "../store/authStore";
import { AskquestionModal } from "./askquestionmodal.jsx";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, setUserProfile, userProfile } =
    useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authStatus = await checkAuth();
        setIsAuthenticated(authStatus);
        const user = await getUserProfile();
        setUserProfile(user);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  function onLogIn() {
    window.location.href = "http://localhost:3000/login";
  }

  function onLogOut() {
    window.location.href = "http://localhost:3000/logout";
  }

  return (
    <nav className="bg-gray-200 p-4 flex items-center justify-between">
      <div className="text-gray-800 font-bold text-xl">ShadowSpeaks</div>

      <ul className="flex space-x-8 font-medium">
        <li>
          <Link
            to="/"
            className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/poll"
            className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300"
          >
            Poll
          </Link>
        </li>
        <li>
          <Link
            to="/confession"
            className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300"
          >
            Confession
          </Link>
        </li>
      </ul>

      <AskquestionModal />

      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="bg-gray-300 text-gray-800 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:shadow-md"
          placeholder="Search..."
        />
        {isAuthenticated ? (
          <button
            onClick={onLogOut}
            className="px-4 py-3 bg-gray-300 rounded-lg hover:bg-yellow-500 hover:text-white"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={onLogIn}
            className="px-4 py-3 bg-gray-300 rounded-lg hover:bg-yellow-500 hover:text-white"
          >
            Login
          </button>
        )}
        <div className="w-10 h-10 overflow-hidden rounded-full">
          {userProfile ? (
            <img
              src={userProfile.picture}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <AvatarIcon className="w-full h-full object-cover" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
