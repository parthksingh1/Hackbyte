import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4 flex items-center justify-between">

      <div className="text-gray-800 font-bold text-xl">Alone</div>
      
      <ul className="flex space-x-8">
        <li><a href="#" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">Home</a></li>
        <li><a href="#" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">Polls</a></li>
        <li><a href="#" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">Confessions</a></li>
        <li><a href="#" className="text-lg text-gray-800 hover:text-gray-600 hover:border-yellow-500 border-b-2 border-transparent transition duration-300">Settings</a></li>
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
