// packages/ui/components/Header.tsx
import React, { useState } from "react";
import { QuickSearchIcon, NotificationIcon, SettingsIcon, UserIcon } from "../icons/header";
import Link from "next/link";

export const Header: React.FC = () => {
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4">
      {/* Left: Workspace Logo */}
      <div className="flex items-center">
        <div
          className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded cursor-pointer flex items-center justify-center mr-4"
          onClick={() => setWorkspaceOpen(!workspaceOpen)}
        >
          <span className="font-bold text-gray-700 dark:text-gray-200">Y</span>
        </div>

        {workspaceOpen && (
          <div className="absolute top-16 left-4 bg-white dark:bg-gray-800 shadow rounded p-4 z-50 w-64">
            <ul className="space-y-2 text-gray-900 dark:text-white">
              <li>
                <Link href="/admin/settings">Settings</Link>
              </li>
              <li>
                <Link href="/invite">Invite Members</Link>
              </li>
              <li>
                <Link href="/workspace/switch">Switch Workspace</Link>
              </li>
              <li>
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <QuickSearchIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
        </div>

        <div className="relative">
          <NotificationIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
        </div>

        <button
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="relative">
          <UserIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};
