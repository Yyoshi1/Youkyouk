// packages/ui/components/QuickSearch.tsx
import React, { useState } from "react";

interface QuickSearchItem {
  title: string;
  description?: string;
}

const mockItems: QuickSearchItem[] = [
  { title: "Dashboard", description: "Go to main dashboard" },
  { title: "Projects", description: "View all projects" },
  { title: "My Issues", description: "Your assigned tasks" },
  { title: "Teams", description: "View your teams" },
  { title: "Settings", description: "Account and preferences" },
];

export const QuickSearch: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredItems = mockItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full">
      <input
        type="text"
        autoFocus
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500 mb-2"
      />
      <ul className="max-h-64 overflow-y-auto">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>
            {item.description && (
              <span className="text-gray-500 dark:text-gray-300 text-sm ml-2">{item.description}</span>
            )}
          </li>
        ))}
        {filteredItems.length === 0 && (
          <li className="p-2 text-gray-500 dark:text-gray-400">No results found</li>
        )}
      </ul>
    </div>
  );
};
