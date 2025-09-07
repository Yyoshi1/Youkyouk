import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4">
      <nav className="space-y-2">
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-1">Inbox</h3>
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-1">My Issues</h3>
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-1">Pulse</h3>
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-1">Workspace</h3>
          <ul className="ml-4 space-y-1">
            <li>Initiatives</li>
            <li>Projects</li>
            <li>Views</li>
            <li>Members</li>
            <li>Teams</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-1">Favorites</h3>
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-1">Your Teams</h3>
          <ul className="ml-4 space-y-1">
            <li>Team Name
              <ul className="ml-4 space-y-1">
                <li>Issues</li>
                <li>Projects</li>
                <li>Views</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
