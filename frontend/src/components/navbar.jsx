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
    window.location.href = "http://localhost:3001/login";
  }

  function onLogOut() {
    window.location.href = "http://localhost:3001/logout";
  }

  return (
    <nav className="bg-n-8/90 p-4 flex items-center justify-between text-purple-400">
      <div className="text-purple-800 font-bold text-xl">ShadowSpeaks</div>

      <ul className="flex gap-12">
        <li>
          <Link
            to="/"
            className="text-lg text-purple-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/qna"
            className="text-lg text-purple-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300"
          >
            QnA
          </Link>
        </li>
        <li>
          <Link
            to="/poll"
            className="text-lg text-purple-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300"
          >
            Poll
          </Link>
        </li>
        <li>
          <Link
            to="/confession"
            className="text-lg text-purple-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300"
          >
            Confession
          </Link>
        </li>
      </ul>

      <AskquestionModal />

      <div className="flex gap-12 items-center space-x-4">
        {isAuthenticated ? (
          <button
            className="px-4 py-2 border-2 rounded-lg border-yellow-400 hover:scale-105 transistion-all duration-300 ease-in-out"
            onClick={onLogOut}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-4 py-2 border-2 rounded-lg border-yellow-400 hover:scale-105 transistion-all duration-300 ease-in-out"
            onClick={onLogIn}
          >
            Login
          </button>
        )}
        <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-800">
          {userProfile ? (
            <img
              src={userProfile ? userProfile.picture : ""}
              alt="Profile Image"
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
