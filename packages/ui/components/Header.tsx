import React from "react";
import { QuickSearch } from "./QuickSearch";
import { UserDropdown } from "./UserDropdown";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Youkyouk Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk</span>
      </div>
      <div className="flex-1 mx-4">
        <QuickSearch />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">🛎️</button>
        <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">⚙️</button>
        <UserDropdown />
      </div>
    </header>
  );
};
