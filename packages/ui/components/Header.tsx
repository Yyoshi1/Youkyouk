// packages/ui/components/Header.tsx
import React, { useState, useEffect } from "react";
import { QuickSearchIcon, UserIcon, NotificationIcon, SettingsIcon } from "../icons/Icons";
import { QuickSearch } from "./QuickSearch";

export const Header: React.FC = () => {
  const [showQuickSearch, setShowQuickSearch] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "e") {
      e.preventDefault();
      setShowQuickSearch(true);
    }
    if (e.key === "Escape") {
      setShowQuickSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow relative">
      {/* الشعار */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Youkyouk" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-900 dark:text-white">Youkyouk</span>
      </div>

      {/*  */}
      <div className="flex-1 px-4 flex justify-center">
        {showQuickSearch && (
          <div
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
            onClick={() => setShowQuickSearch(false)}
          >
            <div onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-gray-800 p-4 rounded w-1/2">
              <QuickSearch />
            </div>
          </div>
        )}
      </div>

      {/*  */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <NotificationIcon className="w-5 h-5" />
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <SettingsIcon className="w-5 h-5" />
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <UserIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
