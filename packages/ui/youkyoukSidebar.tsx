import React from "react";
import { YoukyoukButton } from "./YoukyoukButton";
import { YoukyoukAvatar } from "./YoukyoukAvatar";

export const YoukyoukSidebar: React.FC = () => {
  const workspaces = ["Initiatives", "Projects", "Views", "Members", "Teams"];
  const yourTeams = ["Team Alpha", "Team Beta", "Team Gamma"];

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col justify-between">
      {/* Logo + Dropdown */}
      <div className="px-4 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-brand-500 rounded-sm flex items-center justify-center text-white font-bold">Y</div>
          <span className="font-semibold text-neutral-800">youkyouk</span>
        </div>
        <YoukyoukButton variant="ghost" size="sm">⋯</YoukyoukButton>
      </div>

      {/* Navigation */}
      <nav className="px-2 mt-6 flex-1 overflow-y-auto">
        {/* Workspaces */}
        <div className="mb-4">
          <div className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Workspaces</div>
          <ul className="space-y-1">
            {workspaces.map((item) => (
              <li key={item}>
                <a className="flex items-center px-3 py-2 rounded-md hover:bg-neutral-50">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Favorites */}
        <div className="mb-4">
          <div className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Favorites</div>
          <ul className="space-y-1">
            <li><a className="flex items-center px-3 py-2 rounded-md hover:bg-neutral-50">Starred Issues</a></li>
          </ul>
        </div>

        {/* Your Teams */}
        <div>
          <div className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Your Teams</div>
          <ul className="space-y-1">
            {yourTeams.map((team) => (
              <li key={team}>
                <a className="flex items-center px-3 py-2 rounded-md hover:bg-neutral-50">{team}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer / User */}
      <div className="px-4 py-5 border-t flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <YoukyoukAvatar size={8} name="Youkyouk User" />
          <div>
            <div className="text-sm font-medium">Youkyouk User</div>
            <div className="text-xs text-neutral-500">you@youkyouk.com</div>
          </div>
        </div>
        <YoukyoukButton variant="ghost" size="sm">⤓</YoukyoukButton>
      </div>
    </aside>
  );
};
