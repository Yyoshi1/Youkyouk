import React from "react";
import { YoukyoukAvatar } from "./YoukyoukAvatar";

export const YoukyoukSidebar: React.FC = () => {
  const mainSections = ["Inbox", "My Issues", "Pulse"];
  const workspaces = ["Initiatives", "Projects", "Views", "Members", "Teams"];
  const favorites = ["Issue #24", "PR #12", "Mobile App Redesign"];
  const yourTeams = ["Frontend Team", "Backend Team", "Design Team"];

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col p-4 space-y-6">
      {/* Main Sections */}
      <div>
        <ul>
          {mainSections.map((section, idx) => (
            <li key={idx} className="px-2 py-2 rounded hover:bg-neutral-50 cursor-pointer font-medium">
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Workspaces Section */}
      <div>
        <h2 className="text-xs font-semibold text-neutral-400 uppercase mb-2">Workspaces</h2>
        <ul>
          {workspaces.map((ws, idx) => (
            <li key={idx} className="px-2 py-1 rounded hover:bg-neutral-50 cursor-pointer">{ws}</li>
          ))}
        </ul>
      </div>

      {/* Favorites Section */}
      <div>
        <h2 className="text-xs font-semibold text-neutral-400 uppercase mb-2">Favorites</h2>
        <ul>
          {favorites.map((fav, idx) => (
            <li key={idx} className="px-2 py-1 rounded hover:bg-neutral-50 cursor-pointer">{fav}</li>
          ))}
        </ul>
      </div>

      {/* Your Teams Section */}
      <div className="mt-auto">
        <h2 className="text-xs font-semibold text-neutral-400 uppercase mb-2">Your Teams</h2>
        <ul>
          {yourTeams.map((team, idx) => (
            <li key={idx} className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-neutral-50 cursor-pointer">
              <YoukyoukAvatar size={6} name={team[0]} />
              <span className="text-sm">{team}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
