import React from "react";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow flex flex-col p-4">
      <h2 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <a href="/admin/dashboard" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">Dashboard</a>
        <a href="/admin/users" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">Users</a>
        <a href="/admin/settings" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">Settings</a>
      </nav>
    </aside>
  );
};
