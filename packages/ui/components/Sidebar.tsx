import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4 overflow-auto">
      <nav className="space-y-2">
        <div className="font-semibold text-gray-700 dark:text-gray-200">Inbox</div>
        <div className="font-semibold text-gray-700 dark:text-gray-200">My Issues</div>
        <div className="font-semibold text-gray-700 dark:text-gray-200">Pulse</div>

        {/* Workspace */}
        <div className="mt-4 font-bold text-gray-800 dark:text-gray-100">Workspace</div>
        <ul className="ml-2 space-y-1">
          <li>Initiatives</li>
          <li>Projects</li>
          <li>Views</li>
          <li>Members</li>
          <li>Teams</li>
        </ul>

        {/* Favorites */}
        <div className="mt-4 font-bold text-gray-800 dark:text-gray-100">Favorites</div>
        <ul className="ml-2 space-y-1">
          <li>Favorites</li>
        </ul>

        {/* Your Teams */}
        <div className="mt-4 font-bold text-gray-800 dark:text-gray-100">Your Teams</div>
        <ul className="ml-2 space-y-1">
          <li>
            Team Alpha
            <ul className="ml-2 space-y-1">
              <li>Issues</li>
              <li>Projects</li>
              <li>Views</li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
