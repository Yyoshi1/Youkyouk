import React from "react";
import { InboxIcon, IssuesIcon, PulseIcon, WorkspaceIcon, TeamsIcon, FavoritesIcon } from "../icons/sidebar";

export const Sidebar: React.FC = () => (
  <nav className="w-64 bg-white dark:bg-gray-800 p-4 h-screen">
    <ul>
      <li className="flex items-center mb-2">
        <InboxIcon className="w-5 h-5 mr-2" /> Inbox
      </li>
      <li className="flex items-center mb-2">
        <IssuesIcon className="w-5 h-5 mr-2" /> My Issues
      </li>
      <li className="flex items-center mb-2">
        <PulseIcon className="w-5 h-5 mr-2" /> Pulse
      </li>
      <li className="flex flex-col mb-2">
        <div className="flex items-center"><WorkspaceIcon className="w-5 h-5 mr-2" /> Workspace</div>
        <ul className="ml-6 mt-1">
          <li>Initiatives</li>
          <li>Projects</li>
          <li>Views</li>
          <li>Members</li>
        </ul>
      </li>
      <li className="flex items-center mb-2"><TeamsIcon className="w-5 h-5 mr-2" /> Your Teams</li>
      <li className="flex items-center"><FavoritesIcon className="w-5 h-5 mr-2" /> Favorites</li>
    </ul>
  </nav>
);
