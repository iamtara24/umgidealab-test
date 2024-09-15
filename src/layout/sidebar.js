import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <nav>
        <ul className="space-y-4">
          {/* User */}
          <li>
            <NavLink
              to="/man-user"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md ${
                  isActive ? 'bg-gray-700 text-white' : 'text-gray-200 hover:bg-gray-700'
                }`
              }
            >
              <span className="ml-2">User Management</span>
            </NavLink>
          </li>

          {/* Category */}
          <li>
            <NavLink
              to="/man-category"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md ${
                  isActive ? 'bg-gray-700 text-white' : 'text-gray-200 hover:bg-gray-700'
                }`
              }
            >
              <span className="ml-2">Category Management</span>
            </NavLink>
          </li>

          {/* Product */}
          <li>
            <NavLink
              to="/man-product"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md ${
                  isActive ? 'bg-gray-700 text-white' : 'text-gray-200 hover:bg-gray-700'
                }`
              }
            >
              <span className="ml-2">Product Management</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;