// packages/ui/components/Sidebar.tsx
import React from "react";
import { FaInbox, FaTasks, FaRocket, FaProjectDiagram, FaUsers, FaStar, FaTeam } from "react-icons/fa";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 shadow flex flex-col h-screen">
      <nav className="flex-1 overflow-auto">
        <ul className="space-y-2 p-4">
          {/* Inbox */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaInbox />
            <span>Inbox</span>
          </li>

          {/* My Issues */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaTasks />
            <span>My Issues</span>
          </li>

          {/* Pulse */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaRocket />
            <span>Pulse</span>
          </li>

          {/* Workspace */}
          <li className="mt-4 font-semibold text-gray-500 uppercase">Workspace</li>
          <li className="flex flex-col ml-4 space-y-1">
            <span className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <FaProjectDiagram />
              <span>Projects</span>
            </span>
            <span className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <FaRocket />
              <span>Initiatives</span>
            </span>
            <span className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <FaUsers />
              <span>Members</span>
            </span>
            <span className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <FaTeam />
              <span>Teams</span>
            </span>
          </li>

          {/* Favorites */}
          <li className="mt-4 font-semibold text-gray-500 uppercase">Favorites</li>
          <li className="flex items-center space-x-2 p-2 ml-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <FaStar />
            <span>Favorites</span>
          </li>

          {/* Your Teams */}
          <li className="mt-4 font-semibold text-gray-500 uppercase">Your Teams</li>
          <li className="flex flex-col ml-4 space-y-1">
            <span className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <FaTeam />
              <span>Team A</span>
            </span>
            <span className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <FaTasks />
              <span>Issues</span>
            </span>
            <span className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <FaProjectDiagram />
              <span>Projects</span>
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
