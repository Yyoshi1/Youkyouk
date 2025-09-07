import React from "react";
import {
  InboxIcon, IssuesIcon, PulseIcon, WorkspaceIcon,
  InitiativesIcon, ProjectsIcon, ViewsIcon, MembersIcon,
  TeamsIcon, FavoritesIcon, YourTeamIcon
} from "../icons/Icons";

interface SidebarItem {
  title: string;
  icon: React.FC<{ className?: string }>;
  subItems?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  { title: "Inbox", icon: InboxIcon },
  { title: "My Issues", icon: IssuesIcon },
  { title: "Pulse", icon: PulseIcon },
  {
    title: "Workspace",
    icon: WorkspaceIcon,
    subItems: [
      { title: "Initiatives", icon: InitiativesIcon },
      { title: "Projects", icon: ProjectsIcon },
      { title: "Views", icon: ViewsIcon },
      { title: "Members", icon: MembersIcon },
      { title: "Teams", icon: TeamsIcon },
    ],
  },
  { title: "Favorites", icon: FavoritesIcon },
  {
    title: "Your Teams",
    icon: YourTeamIcon,
    subItems: [
      { title: "Issues", icon: IssuesIcon },
      { title: "Projects", icon: ProjectsIcon },
      { title: "Views", icon: ViewsIcon },
    ],
  },
];

export const Sidebar: React.FC = () => (
  <aside className="w-64 bg-white dark:bg-gray-800 shadow flex-shrink-0 h-screen overflow-auto">
    <ul className="p-4 space-y-2">
      {sidebarItems.map((item, idx) => (
        <li key={idx}>
          <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-gray-900 dark:text-white font-medium">{item.title}</span>
          </div>
          {item.subItems && (
            <ul className="pl-6 mt-1 space-y-1">
              {item.subItems.map((sub, subIdx) => (
                <li key={subIdx} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <sub.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">{sub.title}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </aside>
);
