import React, { useState } from "react";
import Link from "next/link";

export const Sidebar: React.FC = () => {
  const [workspacesOpen, setWorkspacesOpen] = useState(true);
  const [yourTeamsOpen, setYourTeamsOpen] = useState(true);

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 flex-shrink-0">
      <div className="p-4 text-gray-900 dark:text-white font-bold text-xl">Youkyouk</div>

      <nav className="px-2">
        <ul className="space-y-2">

          {/*  */}
          <li>
            <Link href="/inbox" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              Inbox
            </Link>
          </li>

          <li>
            <Link href="/my-issues" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              My Issues
            </Link>
          </li>

          <li>
            <Link href="/pulse" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              Pulse
            </Link>
          </li>

          {/* Workspaces  */}
          <li>
            <button
              onClick={() => setWorkspacesOpen(!workspacesOpen)}
              className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between items-center"
            >
              Workspaces
              <span>{workspacesOpen ? "-" : "+"}</span>
            </button>
            {workspacesOpen && (
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <Link href="/workspaces/initiatives" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/workspaces/projects" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/workspaces/views" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    Views
                  </Link>
                </li>
                <li>
                  <Link href="/workspaces/members" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    Members
                  </Link>
                </li>
                <li>
                  <Link href="/workspaces/teams" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    Teams
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/favorites" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              Favorites
            </Link>
          </li>

          {/* Your Teams */}
          <li>
            <button
              onClick={() => setYourTeamsOpen(!yourTeamsOpen)}
              className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between items-center"
            >
              Your Teams
              <span>{yourTeamsOpen ? "-" : "+"}</span>
            </button>
            {yourTeamsOpen && (
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <Link href="/your-teams" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    All Teams
                  </Link>
                </li>
                {/*  */}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};
