import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <img src="/avatar.png" alt="User" className="w-6 h-6 rounded-full" />
        <span className="text-gray-800 dark:text-gray-200">John Doe</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow rounded">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
