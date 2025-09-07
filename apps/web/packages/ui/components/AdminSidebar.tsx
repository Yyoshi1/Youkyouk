import React from "react";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full">
      <ul className="p-4 space-y-2">
        <li>
          <a href="/admin/dashboard" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/admin/users" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Users
          </a>
        </li>
        <li>
          <a href="/admin/settings" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};
