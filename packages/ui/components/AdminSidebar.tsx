import React from 'react';

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen">
      <nav className="flex flex-col p-4 space-y-2">
        <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Dashboard</li>
        <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Users</li>
        <li className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">Settings</li>
      </nav>
    </aside>
  );
};
