import React from "react";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 dark:bg-gray-800 h-screen p-4">
      <nav className="space-y-2">
        <div>
          <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Dashboard</h3>
        </div>
        <div>
          <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Users</h3>
        </div>
        <div>
          <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Settings</h3>
        </div>
      </nav>
    </aside>
  );
};
