// packages/ui/components/AdminSidebar.tsx
import React from "react";
import { FaTachometerAlt, FaUsers, FaCogs, FaEnvelope, FaTasks } from "react-icons/fa";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 shadow flex flex-col h-screen">
      <nav className="flex-1 overflow-auto">
        <ul className="space-y-2 p-4">
          {/* Dashboard */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>

          {/* Users */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaUsers />
            <span>Users</span>
          </li>

          {/* Settings */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaCogs />
            <span>Settings</span>
          </li>

          {/* Inbox */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaEnvelope />
            <span>Inbox</span>
          </li>

          {/* My Issues */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaTasks />
            <span>My Issues</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
