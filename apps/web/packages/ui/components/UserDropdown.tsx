import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        User
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow">
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Profile
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Settings
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};
