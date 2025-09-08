// packages/ui/components/Header.tsx
import React, { useState } from "react";
import {
  NotificationIcon,
  SettingsIcon,
  UserIcon,
} from "../icons/header";

export const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="flex items-center justify-between px-6 h-16 bg-white dark:bg-gray-800 shadow">
      {/* Logo / Workspace */}
      <div className="flex items-center space-x-2 relative">
        <img
          src="/logo.png"
          alt="Workspace Logo"
          className="w-8 h-8 cursor-pointer object-cover rounded-sm"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="absolute top-16 left-0 w-60 bg-white dark:bg-gray-700 shadow rounded p-3 z-10">
            <ul className="space-y-2 text-gray-800 dark:text-gray-100">
              <li className="hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded cursor-pointer">Settings</li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded cursor-pointer">Invite Members</li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded cursor-pointer">Manage Members</li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded cursor-pointer">Switch Workspace</li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded cursor-pointer text-red-500">Sign Out</li>
            </ul>
          </div>
        )}
      </div>

      {/* Right icons */}
      <div className="flex items-center space-x-4">
        <button>
          <NotificationIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        <button>
          <SettingsIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        <button>
          <UserIcon className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </header>
  );
};
