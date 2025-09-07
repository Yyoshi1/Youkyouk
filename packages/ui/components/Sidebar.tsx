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
    <aside className="w-64 bg-white dark:bg-gray-800 shadow flex flex-col">
      <nav className="flex-1 p-4 space-y-2 overflow-auto">
        {/* أقسام رئيسية */}
        <div>
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <InboxIcon className="w-5 h-5" />
            <span>Inbox</span>
          </div>
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <IssuesIcon className="w-5 h-5" />
            <span>My Issues</span>
          </div>
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <PulseIcon className="w-5 h-5" />
            <span>Pulse</span>
          </div>
        </div>

        {/* Workspace */}
        <div className="mt-4">
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <WorkspaceIcon className="w-5 h-5" />
            <span>Workspace</span>
          </div>
          <div className="ml-6 space-y-1">
            <div className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <InitiativesIcon className="w-4 h-4" />
              <span>Initiatives</span>
            </div>
            <div className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <ProjectsIcon className="w-4 h-4" />
              <span>Projects</span>
            </div>
            <div className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <ViewsIcon className="w-4 h-4" />
              <span>Views</span>
            </div>
            <div className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <MembersIcon className="w-4 h-4" />
              <span>Members</span>
            </div>
            <div className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <TeamsIcon className="w-4 h-4" />
              <span>Teams</span>
            </div>
          </div>
        </div>

        {/* Favorites */}
        <div className="mt-4">
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <FavoritesIcon className="w-5 h-5" />
            <span>Favorites</span>
          </div>
        </div>

        {/* Your Team */}
        <div className="mt-4">
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <YourTeamIcon className="w-5 h-5" />
            <span>Your Team</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};
