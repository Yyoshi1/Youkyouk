import React from "react";
import { QuickSearchIcon, NotificationIcon, UserIcon, SettingsIcon } from "../icons/Icons";
import { UserDropdown } from "./UserDropdown";
import { QuickSearch } from "./QuickSearch";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      {/*  */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Youkyouk" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-900 dark:text-white">Youkyouk</span>
      </div>

      {/*  */}
      <div className="flex-1 px-4">
        <QuickSearch />
      </div>

      {/*  */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <NotificationIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        <UserDropdown />
      </div>
    </header>
  );
};
