import React from "react";
import { useTheme } from "./context/ThemeContext";

export const YoukyoukSidebar: React.FC = () => {
  const { theme } = useTheme();

  const mainSections = ["Inbox", "My Issues", "Pulse"];
  const workspaces = ["Initiatives", "Projects", "Views", "Members", "Teams"];
  const favorites = ["Favorites"];
  const yourTeams = [
    { name: "Frontend Team" },
    { name: "Backend Team" },
    { name: "Design Team" },
  ];

  const Section = ({ title, items }: { title: string; items: string[] }) => (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase text-neutral-400 dark:text-neutral-500 mb-2">{title}</p>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const TeamSection = () => (
    <div>
      <p className="text-xs font-semibold uppercase text-neutral-400 dark:text-neutral-500 mb-2">Your Teams</p>
      <ul>
        {yourTeams.map((team) => (
          <li
            key={team.name}
            className="px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <aside
      className={`w-64 bg-white dark:bg-neutral-900 border-r h-full overflow-auto p-4 flex-shrink-0`}
    >
      <Section title="Main" items={mainSections} />
      <Section title="Workspaces" items={workspaces} />
      <Section title="Favorites" items={favorites} />
      <TeamSection />
    </aside>
  );
};
