import React, { useState } from "react";
import { useTheme } from "./context/ThemeContext";

export const YoukyoukHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="h-16 bg-white dark:bg-neutral-900 border-b flex items-center justify-between px-6">
      <div className="font-bold text-lg cursor-pointer">youkyouk</div>

      <div className="flex-1 mx-6 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1 border rounded text-sm bg-neutral-50 dark:bg-neutral-800 focus:outline-none focus:ring"
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setSearchOpen(false)}
        />
        {searchOpen && (
          <div className="absolute mt-1 w-full bg-white dark:bg-neutral-800 border rounded shadow z-10">
            {/* Quick Search Results */}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        <div className="relative">
          <div
            className="w-8 h-8 rounded-full bg-neutral-400 cursor-pointer"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          />
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 border rounded shadow z-20">
              <ul className="py-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer">
                  Invite / Manage Members
                </li>
                <li className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer">
                  Switch Workspace
                </li>
                <li className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
