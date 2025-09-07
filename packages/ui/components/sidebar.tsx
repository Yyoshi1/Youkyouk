// packages/ui/components/Sidebar.tsx
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 p-4 bg-gray-200 dark:bg-gray-900">
      <nav>
        <ul className="space-y-2">
          <li>Dashboard</li>
          <li>Inbox</li>
          <li>Workspaces</li>
        </ul>
      </nav>
    </aside>
  );
};
