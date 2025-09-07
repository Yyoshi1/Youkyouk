import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4">
      <nav className="space-y-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Teams</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Settings</a>
      </nav>
    </aside>
  );
};
