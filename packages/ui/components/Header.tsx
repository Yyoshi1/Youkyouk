import React, { useEffect, useRef } from "react";
import { Bell, Command, Settings } from "lucide-react";
import { QuickSearch } from "./QuickSearch";
import { UserDropdown } from "./UserDropdown";

export const Header: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "e") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      {/*  */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-900 dark:text-white">Dashboard</span>
      </div>

      {/*  */}
      <div className="flex-1 px-4">
        <QuickSearch inputRef={searchRef} />
      </div>

      {/* */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <Command size={20} />
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <Settings size={20} />
        </button>
        <UserDropdown />
      </div>
    </header>
  );
};
