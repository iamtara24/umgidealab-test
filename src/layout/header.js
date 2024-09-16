import React from 'react';
import Logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <header className="bg-blue-50 flex items-center justify-between shadow-lg">
      <div className="flex items-center w-64 justify-center bg-blue-100 pb-4">
        <img
          src={Logo}
          alt="Logo"
          className="h-11 w-auto"
        />
        {/* <span className="ml-4 text-lg font-semibold text-blue-700 ">Admin Panel</span> */}
      </div>
      <div className="p-4 flex items-center space-x-4">
        {/* Home Button */}
        <Link to="/homepage">
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>
        </Link>
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
        >
            Logout
        </button>
      </div>
    </header>
  );
};

export default Header;