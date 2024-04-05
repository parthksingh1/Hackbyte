import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4 flex items-center justify-between">

      <div className="text-gray-800 font-bold text-xl">Alone</div>

      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/poll" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">
            Poll
          </Link>
        </li>
        <li>
          <Link to="/confession" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">
            Confession
          </Link>
        </li>
        <li>
          <Link to="/" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">
            Settings
          </Link>
        </li>
      </ul>


      <div className="flex items-center space-x-4">
        <input type="text" className="bg-gray-300 text-gray-800 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:shadow-md" placeholder="Search..." />
        <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-800 mb-4">
          <img src="path_to_your_image.jpg" alt="Profile Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
