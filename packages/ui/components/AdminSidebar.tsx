import React from "react";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-4">
      <nav className="space-y-2">
        <div>Dashboard</div>
        <div>Users</div>
        <div>Settings</div>
      </nav>
    </aside>
  );
};
