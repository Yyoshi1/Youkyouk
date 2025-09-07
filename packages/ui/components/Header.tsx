import React from "react";
import { QuickSearch } from "./QuickSearch";
import { UserDropdown } from "./UserDropdown";
import { SearchIcon, NotificationsIcon } from "../icons/general";

export const Header: React.FC = () => (
  <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="Logo" className="h-8 w-8" />
      <span className="font-bold text-xl">Youkyouk</span>
    </div>

    <div className="flex-1 mx-4">
      <QuickSearch />
    </div>

    <div className="flex items-center space-x-4">
      <button><SearchIcon className="w-5 h-5" /></button>
      <button><NotificationsIcon className="w-5 h-5" /></button>
      <UserDropdown />
    </div>
  </header>
);
