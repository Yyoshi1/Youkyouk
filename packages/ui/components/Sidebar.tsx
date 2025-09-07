import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-4">
      <nav className="space-y-2">
        <div>Inbox</div>
        <div>My Issues</div>
        <div>Pulse</div>
        <div>
          Workspace
          <div className="ml-4">
            <div>Initiatives</div>
            <div>Projects</div>
            <div>Views</div>
            <div>Members</div>
            <div>Teams</div>
          </div>
        </div>
        <div>
          Favorites
          <div className="ml-4">
            <div>Favorites</div>
          </div>
        </div>
        <div>
          Your Teams
          <div className="ml-4">
            <div>Team A</div>
            <div>Team B</div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
