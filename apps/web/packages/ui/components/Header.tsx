import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-lg font-bold text-gray-800 dark:text-white">
        Youkyouk
      </h1>
      <nav className="flex items-center gap-4">
        <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Notifications
        </button>
        <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Profile
        </button>
      </nav>
    </header>
  );
};
