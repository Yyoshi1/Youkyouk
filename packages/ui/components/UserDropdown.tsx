import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <img src="/icons/user.png" alt="User" className="h-6 w-6 rounded-full" />
        <span className="text-gray-900 dark:text-white">K. Abou</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow rounded">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
        </div>
      )}
    </div>
  );
};
