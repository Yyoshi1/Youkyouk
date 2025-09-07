import React from "react";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Dashboard</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Users</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Roles</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Permissions</li>
      </ul>
    </aside>
  );
};
