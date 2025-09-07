import React from "react";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4">
      <nav className="space-y-2">
        <div className="text-gray-500 uppercase text-xs">Admin Dashboard</div>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Users</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Settings</a>

        <div className="text-gray-500 uppercase text-xs mt-4">Workspaces</div>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Workspace 1</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Workspace 2</a>

        <div className="text-gray-500 uppercase text-xs mt-4">Your Teams</div>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Team A</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Team B</a>
      </nav>
    </aside>
  );
};
