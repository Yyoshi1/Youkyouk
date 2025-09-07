import React from "react";
import { Home, Inbox, AlertCircle, Activity, Users, Settings, Folder } from "lucide-react";

interface MenuItem {
  name: string;
  icon?: React.ReactNode;
  roles: string[];
  subItems?: MenuItem[];
}

interface SidebarProps {
  userRole: string; // admin, manager, employee, etc.
}

export const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: <Home size={16} />, roles: ["admin", "manager", "employee"] },
    { name: "Inbox", icon: <Inbox size={16} />, roles: ["admin", "manager", "employee"] },
    { name: "Issues", icon: <AlertCircle size={16} />, roles: ["admin", "manager"] },
    { name: "Pulse", icon: <Activity size={16} />, roles: ["admin", "manager"] },
    {
      name: "Workspaces",
      icon: <Folder size={16} />,
      roles: ["admin", "manager"],
      subItems: [
        { name: "Projects", roles: ["admin", "manager"] },
        { name: "Tasks", roles: ["admin", "manager"] },
      ],
    },
    {
      name: "Your Teams",
      icon: <Users size={16} />,
      roles: ["admin", "manager"],
      subItems: [
        { name: "Team A", roles: ["admin", "manager"] },
        { name: "Team B", roles: ["admin", "manager"] },
      ],
    },
    { name: "Settings", icon: <Settings size={16} />, roles: ["admin", "manager", "employee"] },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-screen shadow-md flex flex-col">
      <div className="p-4 text-xl font-bold text-gray-900 dark:text-white">Youkyouk</div>
      <nav className="flex-1 overflow-auto">
        {menuItems.map((item, idx) => {
          if (!item.roles.includes(userRole)) return null;
          return (
            <div key={idx}>
              <div className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.name}</span>
              </div>
              {item.subItems &&
                item.subItems.map(
                  (sub, sidx) =>
                    sub.roles.includes(userRole) && (
                      <div
                        key={sidx}
                        className="flex items-center pl-8 px-4 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      >
                        {sub.name}
                      </div>
                    )
                )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
