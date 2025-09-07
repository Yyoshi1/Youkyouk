// packages/ui/components/Sidebar.tsx
import React from "react";
import { FaUsers, FaCog, FaInbox, FaTasks, FaProjectDiagram } from "react-icons/fa";

interface SidebarProps {
  role: "admin" | "manager" | "employee";
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, isOpen }) => {
  const sections = [
    {
      name: "Dashboard",
      icon: <FaProjectDiagram />,
      sub: [],
      roles: ["admin", "manager", "employee"],
    },
    {
      name: "Workspaces",
      icon: <FaTasks />,
      sub: ["Workspace 1", "Workspace 2"],
      roles: ["admin", "manager"],
    },
    {
      name: "Your Teams",
      icon: <FaUsers />,
      sub: ["Team A", "Team B"],
      roles: ["admin", "manager"],
    },
    {
      name: "Inbox",
      icon: <FaInbox />,
      sub: [],
      roles: ["admin", "manager", "employee"],
    },
    {
      name: "Issues",
      icon: <FaTasks />,
      sub: [],
      roles: ["admin", "manager"],
    },
    {
      name: "Settings",
      icon: <FaCog />,
      sub: ["Profile", "Security", "Notifications"],
      roles: ["admin"], // 
    },
  ];

  return (
    <aside
      className={`bg-white dark:bg-gray-800 shadow w-64 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <nav className="flex flex-col p-4 space-y-2">
        {sections
          .filter((section) => section.roles.includes(role))
          .map((section) => (
            <div key={section.name}>
              <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                {section.icon}
                <span>{section.name}</span>
              </div>
              {section.sub.length > 0 && (
                <div className="ml-6 mt-1 flex flex-col space-y-1">
                  {section.sub.map((sub) => (
                    <div
                      key={sub}
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </nav>
    </aside>
  );
};
