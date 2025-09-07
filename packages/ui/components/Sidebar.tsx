// packages/ui/components/Sidebar.tsx
import React from "react";
import { FaInbox, FaTasks, FaChartLine, FaFolder, FaUsers, FaStar } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0">
      <nav className="px-4 py-6">
        {/* Inbox */}
        <div className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <FaInbox />
          <span>Inbox</span>
        </div>

        {/* My Issues */}
        <div className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <FaTasks />
          <span>My Issues</span>
        </div>

        {/* Pulse */}
        <div className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <FaChartLine />
          <span>Pulse</span>
        </div>

        {/* Workspace */}
        <div className="mt-4">
          <h3 className="text-gray-500 uppercase text-xs px-3">Workspace</h3>
          <div className="ml-4 mt-2 space-y-2">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
              <FaFolder />
              <span>Initiatives</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
              <FaFolder />
              <span>Projects</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
              <FaFolder />
              <span>Views</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
              <FaUsers />
              <span>Members</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
              <FaUsers />
              <span>Teams</span>
            </div>
          </div>
        </div>

        {/* Favorites */}
        <div className="mt-4">
          <h3 className="text-gray-500 uppercase text-xs px-3">Favorites</h3>
          <div className="ml-4 mt-2 space-y-2">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
              <FaStar />
              <span>Favorites</span>
            </div>
          </div>
        </div>

        {/* Your Teams */}
        <div className="mt-4">
          <h3 className="text-gray-500 uppercase text-xs px-3">Your Teams</h3>
          <div className="ml-4 mt-2 space-y-2">
            <div className="flex flex-col">
              <span className="font-semibold cursor-pointer hover:text-blue-600">Team Alpha</span>
              <div className="ml-4 mt-1 space-y-1">
                <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <FaTasks />
                  <span>Issues</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <FaFolder />
                  <span>Projects</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <FaFolder />
                  <span>Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
