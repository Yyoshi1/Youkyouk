// packages/ui/components/UserDropdown.tsx
import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src="/icons/user.png"
        alt="User"
        className="w-8 h-8 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow rounded">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
