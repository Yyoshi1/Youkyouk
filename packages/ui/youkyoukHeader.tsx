import React, { useState } from "react";

export const YoukyoukHeader: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 shadow">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer">Youkyouk</span>
      </div>

      {/* Search */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode */}
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">🔔</button>

        {/* User Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            👤
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow z-50">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Invite Members</li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Switch Workspace</li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
