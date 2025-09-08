// packages/ui/components/Header.tsx
import React, { useState } from "react";
import { QuickSearchIcon, NotificationIcon, SettingsIcon, UserIcon } from "../icons/header";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <img src="/logo.png" alt="Youkyouk Logo" className="w-8 h-8" />
        <span className="font-semibold text-lg text-gray-900 dark:text-white">Youkyouk</span>
      </div>

      {/* Center: Quick Search */}
      <div className="flex-1 mx-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-10 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <QuickSearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <button>
          <NotificationIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <button>
          <SettingsIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Workspace/User Dropdown */}
        <div className="relative">
          <img
            src="/workspace.png"
            alt="Workspace"
            className="w-8 h-8 rounded cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Invite / Manage Members
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Switch Workspace
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-red-500">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
