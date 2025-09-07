import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Inbox</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Favorites</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">My Issues</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Pulse</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Workspaces</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Your Teams</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">License</li>
      </ul>
    </aside>
  );
};
