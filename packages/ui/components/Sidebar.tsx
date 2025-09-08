// packages/ui/components/Sidebar.tsx
import React from "react";
import {
  InboxIcon,
  IssuesIcon,
  PulseIcon,
  WorkspaceIcon,
  InitiativesIcon,
  ProjectsIcon,
  ViewsIcon,
  MembersIcon,
  TeamsIcon,
  FavoritesIcon,
  YourTeamIcon,
} from "../icons/sidebar";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 h-screen shadow flex flex-col p-4 space-y-4">
      {/* Top Sections */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
          <InboxIcon className="w-5 h-5" />
          <span>Inbox</span>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
          <IssuesIcon className="w-5 h-5" />
          <span>My Issues</span>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
          <PulseIcon className="w-5 h-5" />
          <span>Pulse</span>
        </div>
      </div>

      {/* Workspace Section */}
      <div className="mt-4">
        <div className="text-xs uppercase text-gray-400 dark:text-gray-500 px-2 mb-1">Workspace</div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <WorkspaceIcon className="w-5 h-5" />
            <span>Workspace</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <InitiativesIcon className="w-5 h-5" />
            <span>Initiatives</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <ProjectsIcon className="w-5 h-5" />
            <span>Projects</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <ViewsIcon className="w-5 h-5" />
            <span>Views</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <MembersIcon className="w-5 h-5" />
            <span>Members</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <TeamsIcon className="w-5 h-5" />
            <span>Teams</span>
          </div>
        </div>
      </div>

      {/* Favorites Section */}
      <div className="mt-4">
        <div className="text-xs uppercase text-gray-400 dark:text-gray-500 px-2 mb-1">Favorites</div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
          <FavoritesIcon className="w-5 h-5" />
          <span>Favorites</span>
        </div>
      </div>

      {/* Your Teams Section */}
      <div className="mt-4">
        <div className="text-xs uppercase text-gray-400 dark:text-gray-500 px-2 mb-1">Your Team</div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
          <YourTeamIcon className="w-5 h-5" />
          <span>Team Name</span>
        </div>
      </div>
    </aside>
  );
};
