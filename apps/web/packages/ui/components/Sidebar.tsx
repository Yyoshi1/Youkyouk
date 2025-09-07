import React from "react";

interface SidebarProps {
  activePage?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  const menu = [
    { name: "Inbox", path: "/inbox" },
    { name: "My Issues", path: "/my-issues" },
    { name: "Pulse", path: "/pulse" },
    { name: "Workspaces", path: "/workspaces" },
    { name: "Favorites", path: "/favorites" },
    { name: "Your Teams", path: "/your-teams" },
  ];

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 font-bold text-xl">Youkyouk</div>
      <nav className="mt-6">
        <ul>
          {menu.map((item) => (
            <li
              key={item.name}
              className={`p-2 hover:bg-gray-200 rounded ${
                activePage === item.name ? "bg-gray-200" : ""
              }`}
            >
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
