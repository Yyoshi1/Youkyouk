import React from "react";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4 overflow-auto">
      <nav className="space-y-2">
        <div className="font-bold text-gray-800 dark:text-gray-100">Dashboard</div>
        <div className="font-semibold text-gray-700 dark:text-gray-200">Users</div>
        <div className="font-semibold text-gray-700 dark:text-gray-200">Settings</div>
      </nav>
    </aside>
  );
};
