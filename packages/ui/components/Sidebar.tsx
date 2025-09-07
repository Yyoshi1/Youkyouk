import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen">
      <nav className="flex flex-col p-4 space-y-2">
        {/* Workspaces */}
        <div>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Workspaces</span>
          <ul className="mt-2 space-y-1">
            <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Workspace 1</li>
            <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Workspace 2</li>
          </ul>
        </div>
        {/* Your Teams */}
        <div>
          <span className="font-semibold text-gray-700 dark:text-gray-200 mt-4 block">Your Teams</span>
          <ul className="mt-2 space-y-1">
            <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Team A</li>
            <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Team B</li>
          </ul>
        </div>
        {/* Inbox, Issues, Pulse */}
        <ul className="mt-4 space-y-1">
          <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Inbox</li>
          <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Issues</li>
          <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Pulse</li>
        </ul>
      </nav>
    </aside>
  );
};
