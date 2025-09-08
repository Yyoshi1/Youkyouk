// packages/ui/components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import {
  InboxIcon,
  IssuesIcon,
  PulseIcon,
  WorkspaceIcon,
  InitiativesIcon,
  ProjectsIcon,
  ViewsIcon,
  MembersIcon,
  TeamsIcon,
  FavoritesIcon,
  YourTeamIcon,
} from "../icons/sidebar";

interface SidebarItem {
  name: string;
  icon: React.FC<{ className?: string }>;
  href?: string;
  subItems?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  { name: "Inbox", icon: InboxIcon, href: "/projects/inbox" },
  { name: "My Issues", icon: IssuesIcon, href: "/projects/my-issues" },
  { name: "Pulse", icon: PulseIcon, href: "/projects/pulse" },
  {
    name: "Workspace",
    icon: WorkspaceIcon,
    subItems: [
      { name: "Initiatives", icon: InitiativesIcon, href: "/projects/initiatives" },
      { name: "Projects", icon: ProjectsIcon, href: "/projects" },
      { name: "Views", icon: ViewsIcon, href: "/projects/views" },
      { name: "Members", icon: MembersIcon, href: "/projects/members" },
      { name: "Teams", icon: TeamsIcon, href: "/projects/teams" },
    ],
  },
  { name: "Favorites", icon: FavoritesIcon, href: "/projects/favorites" },
  {
    name: "Your Teams",
    icon: YourTeamIcon,
    subItems: [
      { name: "Team A", icon: TeamsIcon, href: "/projects/teams/a" },
      { name: "Team B", icon: TeamsIcon, href: "/projects/teams/b" },
    ],
  },
];

export const Sidebar: React.FC = () => {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({});

  const toggleSection = (name: string) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen p-4 overflow-auto">
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <div
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              onClick={() => item.subItems && toggleSection(item.name)}
            >
              <item.icon className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-300" />
              {item.href ? (
                <Link href={item.href}>
                  <span className="text-gray-900 dark:text-white">{item.name}</span>
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white">{item.name}</span>
              )}
            </div>
            {item.subItems && openSections[item.name] && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <Link key={sub.name} href={sub.href || "#"}>
                    <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      <sub.icon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-200">{sub.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
