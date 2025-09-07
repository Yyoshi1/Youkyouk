import React, { useState } from "react";
import {
  UserGroupIcon,
  CogIcon,
  InboxIcon,
  ClipboardListIcon,
  PresentationChartLineIcon,
  UsersIcon,
  StarIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  children?: MenuItem[];
}

const adminMenu: MenuItem[] = [
  { name: "Inbox", icon: <InboxIcon className="w-5 h-5" /> },
  { name: "My Issues", icon: <ClipboardListIcon className="w-5 h-5" /> },
  { name: "Pulse", icon: <PresentationChartLineIcon className="w-5 h-5" /> },
  {
    name: "Workspaces",
    icon: <BriefcaseIcon className="w-5 h-5" />,
    children: [
      { name: "Initiatives", icon: <ClipboardListIcon className="w-4 h-4" /> },
      { name: "Projects", icon: <ClipboardListIcon className="w-4 h-4" /> },
      { name: "Views", icon: <PresentationChartLineIcon className="w-4 h-4" /> },
      { name: "Members", icon: <UsersIcon className="w-4 h-4" /> },
      { name: "Teams", icon: <UsersIcon className="w-4 h-4" /> },
    ],
  },
  {
    name: "Favorites",
    icon: <StarIcon className="w-5 h-5" />,
  },
  {
    name: "Your Teams",
    icon: <UsersIcon className="w-5 h-5" />,
    children: [
      {
        name: "Team A",
        icon: <UsersIcon className="w-4 h-4" />,
        children: [
          { name: "Issues", icon: <ClipboardListIcon className="w-4 h-4" /> },
          { name: "Projects", icon: <ClipboardListIcon className="w-4 h-4" /> },
          { name: "Views", icon: <PresentationChartLineIcon className="w-4 h-4" /> },
        ],
      },
    ],
  },
  {
    name: "Admin Settings",
    icon: <CogIcon className="w-5 h-5" />,
    children: [
      { name: "Users", icon: <UserGroupIcon className="w-4 h-4" /> },
      { name: "Roles & Permissions", icon: <CogIcon className="w-4 h-4" /> },
      { name: "System Settings", icon: <CogIcon className="w-4 h-4" /> },
    ],
  },
];

export const AdminSidebar: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (name: string) => {
    setOpenItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const renderMenu = (items: MenuItem[]) =>
    items.map((item) => (
      <div key={item.name} className="mb-1">
        <button
          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-900 dark:text-white"
          onClick={() => item.children && toggleItem(item.name)}
        >
          <div className="flex items-center space-x-2">
            {item.icon}
            <span>{item.name}</span>
          </div>
          {item.children && <span>{openItems.includes(item.name) ? "▼" : "▶"}</span>}
        </button>

        {item.children && openItems.includes(item.name) && (
          <div className="ml-6 mt-1">{renderMenu(item.children)}</div>
        )}
      </div>
    ));

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow flex-shrink-0 p-2 overflow-y-auto">
      {renderMenu(adminMenu)}
    </aside>
  );
};
