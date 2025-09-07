// packages/ui/components/AdminSidebar.tsx
import React from "react";
import { InboxIcon, IssuesIcon, PulseIcon, WorkspaceIcon, TeamsIcon, FavoritesIcon } from "../icons/Icons";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 h-screen p-4 shadow">
      <nav className="space-y-2">
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
          <InboxIcon className="w-5 h-5" />
          <span>Inbox</span>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
          <IssuesIcon className="w-5 h-5" />
          <span>My Issues</span>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
          <PulseIcon className="w-5 h-5" />
          <span>Pulse</span>
        </div>

        <div className="mt-4 font-semibold">Workspace</div>
        <div className="ml-2 space-y-1">
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <WorkspaceIcon className="w-5 h-5" />
            <span>Initiatives</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <WorkspaceIcon className="w-5 h-5" />
            <span>Projects</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <WorkspaceIcon className="w-5 h-5" />
            <span>Views</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <WorkspaceIcon className="w-5 h-5" />
            <span>Members</span>
          </div>
        </div>

        <div className="mt-4 font-semibold">Your Teams</div>
        <div className="ml-2 space-y-1">
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <TeamsIcon className="w-5 h-5" />
            <span>Team Alpha</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <TeamsIcon className="w-5 h-5" />
            <span>Team Beta</span>
          </div>
        </div>

        <div className="mt-4 font-semibold">Favorites</div>
        <div className="ml-2">
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <FavoritesIcon className="w-5 h-5" />
            <span>Starred Project</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};
