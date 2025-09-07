import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
        <img src="/icons/user.svg" alt="User" className="w-6 h-6 rounded-full" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow">
          <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Profile</div>
          <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Settings</div>
          <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Logout</div>
        </div>
      )}
    </div>
  );
};
