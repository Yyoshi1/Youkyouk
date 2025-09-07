// packages/ui/components/Sidebar.tsx
import React, { useState } from "react";
import { FaInbox, FaTasks, FaChartLine, FaProjectDiagram, FaStar, FaUsers, FaCog } from "react-icons/fa";

interface Team {
  name: string;
  sections: string[];
}

interface User {
  role: "admin" | "manager" | "employee";
  teams: Team[];
}

const Sidebar: React.FC<{ user: User }> = ({ user }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4">
      <ul className="space-y-2">
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <FaInbox /> <span>Inbox</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <FaTasks /> <span>My Issues</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <FaChartLine /> <span>Pulse</span>
        </li>

        {/* Workspaces Section */}
        <li>
          <div
            className="flex items-center justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => toggleSection("workspaces")}
          >
            <div className="flex items-center space-x-2">
              <FaProjectDiagram />
              <span>Workspaces</span>
            </div>
            <span>{expandedSections["workspaces"] ? "▼" : "▶"}</span>
          </div>
          {expandedSections["workspaces"] && (
            <ul className="pl-8 space-y-1">
              <li>Initiatives</li>
              <li>Projects</li>
              <li>Views</li>
              <li>Members</li>
              <li>Teams</li>
            </ul>
          )}
        </li>

        {/* Favorites Section */}
        <li>
          <div
            className="flex items-center justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => toggleSection("favorites")}
          >
            <div className="flex items-center space-x-2">
              <FaStar />
              <span>Favorites</span>
            </div>
            <span>{expandedSections["favorites"] ? "▼" : "▶"}</span>
          </div>
          {expandedSections["favorites"] && (
            <ul className="pl-8 space-y-1">
              <li>Favorites</li>
            </ul>
          )}
        </li>

        {/* Your Teams Section */}
        <li>
          <div
            className="flex items-center justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => toggleSection("teams")}
          >
            <div className="flex items-center space-x-2">
              <FaUsers />
              <span>Your Teams</span>
            </div>
            <span>{expandedSections["teams"] ? "▼" : "▶"}</span>
          </div>
          {expandedSections["teams"] &&
            user.teams.map((team, idx) => (
              <div key={idx} className="pl-8">
                <div className="font-semibold">{team.name}</div>
                <ul className="pl-4 space-y-1">
                  {team.sections.map((sec, sidx) => (
                    <li key={sidx}>{sec}</li>
                  ))}
                </ul>
              </div>
            ))}
        </li>

        {/* Settings Section */}
        {user.role === "admin" || user.role === "manager" || user.role === "employee" ? (
          <li>
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleSection("settings")}
            >
              <div className="flex items-center space-x-2">
                <FaCog />
                <span>Settings</span>
              </div>
              <span>{expandedSections["settings"] ? "▼" : "▶"}</span>
            </div>
            {expandedSections["settings"] && (
              <ul className="pl-8 space-y-1">
                {user.role === "admin" && <li>All Settings</li>}
                {user.role === "manager" && <li>Team Settings</li>}
                {user.role === "employee" && <li>Limited Settings</li>}
              </ul>
            )}
          </li>
        ) : null}
      </ul>
    </aside>
  );
};

export default Sidebar;
