import React from "react";

export const UserDropdown: React.FC = () => {
  return (
    <div className="relative">
      <button className="flex items-center p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
        <img
          src="/icons/user.png"
          alt="User"
          className="h-6 w-6 rounded-full"
        />
      </button>
    </div>
  );
};
