import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Profile", action: () => alert("Go to Profile") },
    { label: "Settings", action: () => alert("Go to Settings") },
    { label: "Logout", action: () => alert("Logging out...") },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <img
          src="/icons/user.svg"
          alt="User"
          className="w-6 h-6 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded z-50">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => { item.action(); setIsOpen(false); }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
