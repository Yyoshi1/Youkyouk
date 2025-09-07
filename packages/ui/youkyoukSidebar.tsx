import React, { useState } from "react";
import Link from "next/link";

export const YoukyoukSidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  const workspaces = [
    { name: "Initiatives", path: "/workspaces#initiatives" },
    { name: "Projects", path: "/workspaces#projects" },
    { name: "Views", path: "/workspaces#views" },
    { name: "Members", path: "/workspaces#members" },
    { name: "Teams", path: "/workspaces#teams" },
  ];

  return (
    <aside className={`bg-white dark:bg-gray-900 p-4 transition-all duration-300 ${expanded ? "w-64" : "w-20"} flex flex-col`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mb-4 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {expanded ? "Collapse" : "Expand"}
      </button>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link href="/inbox">
              <a className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Inbox</a>
            </Link>
          </li>
          <li>
            <Link href="/my-issues">
              <a className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">My Issues</a>
            </Link>
          </li>
          <li>
            <Link href="/pulse">
              <a className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Pulse</a>
            </Link>
          </li>

          <li className="mt-4 font-semibold">Workspaces</li>
          {workspaces.map((ws) => (
            <li key={ws.name}>
              <Link href={ws.path}>
                <a className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">{ws.name}</a>
              </Link>
            </li>
          ))}

          <li className="mt-4 font-semibold">Favorites</li>
          <li>
            <Link href="/favorites">
              <a className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">All Favorites</a>
            </Link>
          </li>

          <li className="mt-4 font-semibold">Your Teams</li>
          <li>
            <Link href="/your-teams">
              <a className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">View Teams</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
