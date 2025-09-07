import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-full">
      <ul className="p-4 space-y-2">
        <li>
          <a href="/" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            About
          </a>
        </li>
      </ul>
    </aside>
  );
};
