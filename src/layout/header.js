import React from 'react';
import Logo from '../assets/img/logo.png'

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
      <div className="p-4">
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