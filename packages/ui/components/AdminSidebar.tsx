import React from "react";
import { InboxIcon, IssuesIcon, PulseIcon, WorkspaceIcon, InitiativesIcon, ProjectsIcon, ViewsIcon, MembersIcon, TeamsIcon, FavoritesIcon, YourTeamIcon } from "../icons/sidebar";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 font-bold text-xl text-gray-900 dark:text-white">Admin</div>

      {/* Main Sections */}
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <InboxIcon className="w-5 h-5 mr-2" /> Inbox
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <IssuesIcon className="w-5 h-5 mr-2" /> My Issues
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <PulseIcon className="w-5 h-5 mr-2" /> Pulse
          </li>

          {/* Workspace */}
          <li className="mt-4 font-semibold px-2 text-gray-500 dark:text-gray-400">Workspace</li>
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <InitiativesIcon className="w-5 h-5 mr-2" /> Initiatives
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <ProjectsIcon className="w-5 h-5 mr-2" /> Projects
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <ViewsIcon className="w-5 h-5 mr-2" /> Views
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <MembersIcon className="w-5 h-5 mr-2" /> Members
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <TeamsIcon className="w-5 h-5 mr-2" /> Teams
            </li>
          </ul>

          {/* Favorites */}
          <li className="mt-4 font-semibold px-2 text-gray-500 dark:text-gray-400">Favorites</li>
          <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <FavoritesIcon className="w-5 h-5 mr-2" /> Favorites
          </li>

          {/* Your Teams */}
          <li className="mt-4 font-semibold px-2 text-gray-500 dark:text-gray-400">Your Teams</li>
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <YourTeamIcon className="w-5 h-5 mr-2" /> Team Alpha
            </li>
          </ul>
        </ul>
      </nav>
    </aside>
  );
};
