import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/man-user');
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-auto" src={Logo} alt="Logo" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <NavLink
              to="/homepage"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold bg-gray-200 px-3 py-2 rounded-md text-sm'
                  : 'text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold bg-gray-200 px-3 py-2 rounded-md text-sm'
                  : 'text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm'
              }
            >
              Product
            </NavLink>
            <button
              onClick={handleLogin}
              className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 block font-semibold bg-gray-200 px-3 py-2 rounded-md text-base'
                : 'text-gray-900 block hover:bg-gray-200 px-3 py-2 rounded-md text-base'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 block font-semibold bg-gray-200 px-3 py-2 rounded-md text-base'
                : 'text-gray-900 block hover:bg-gray-200 px-3 py-2 rounded-md text-base'
            }
          >
            Product
          </NavLink>
          <button
            onClick={handleLogin}
            className="text-gray-900 block hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;