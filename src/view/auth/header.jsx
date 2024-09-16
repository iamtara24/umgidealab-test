import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="bg-blue-50 flex justify-between items-center p-4 shadow-lg">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-11 w-auto" />
        </div>
        <nav className="flex space-x-4">
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'
            }
          >
            Login
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;