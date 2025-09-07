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
} from "../icons/Icons";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-screen shadow overflow-auto">
      <ul className="p-4 space-y-2">

        {/* Sections at the top */}
        <li className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <InboxIcon className="w-5 h-5" />
          <span>Inbox</span>
        </li>
        <li className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <IssuesIcon className="w-5 h-5" />
          <span>My Issues</span>
        </li>
        <li className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <PulseIcon className="w-5 h-5" />
          <span>Pulse</span>
        </li>

        {/* Workspace Section */}
        <li className="mt-4 font-semibold flex items-center space-x-2 p-2">
          <WorkspaceIcon className="w-5 h-5" />
          <span>Workspace</span>
        </li>
        <ul className="ml-6 space-y-1">
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <InitiativesIcon className="w-4 h-4" />
            <span>Initiatives</span>
          </li>
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <ProjectsIcon className="w-4 h-4" />
            <span>Projects</span>
          </li>
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <ViewsIcon className="w-4 h-4" />
            <span>Views</span>
          </li>
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <MembersIcon className="w-4 h-4" />
            <span>Members</span>
          </li>
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <TeamsIcon className="w-4 h-4" />
            <span>Teams</span>
          </li>
        </ul>

        {/* Favorites Section */}
        <li className="mt-4 flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <FavoritesIcon className="w-5 h-5" />
          <span>Favorites</span>
        </li>

        {/* Your Team Section */}
        <li className="mt-4 flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <YourTeamIcon className="w-5 h-5" />
          <span>Your Team</span>
        </li>
        <ul className="ml-6 space-y-1">
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <IssuesIcon className="w-4 h-4" />
            <span>Issues</span>
          </li>
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <ProjectsIcon className="w-4 h-4" />
            <span>Projects</span>
          </li>
          <li className="flex items-center space-x-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <ViewsIcon className="w-4 h-4" />
            <span>Views</span>
          </li>
        </ul>
      </ul>
    </aside>
  );
};
