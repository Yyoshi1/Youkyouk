
import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center space-x-2">
        <img src="/user.png" alt="User" className="h-8 w-8 rounded-full" />
        <span className="text-gray-900 dark:text-white">John Doe</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
          <button className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</button>
          <button className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</button>
          <button className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
        </div>
      )}
    </div>
  );
};
