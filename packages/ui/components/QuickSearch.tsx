import React, { useState } from "react";

export const QuickSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { name: "Inbox", key: "i" },
    { name: "My Issues", key: "m" },
    { name: "Projects", key: "p" },
    { name: "Workspaces", key: "w" },
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === "e") {
      setIsOpen(!isOpen);
      e.preventDefault();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />

      {isOpen && (
        <div
          className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded p-4 z-50"
          onClick={() => setIsOpen(false)}
        >
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Shortcuts</h3>
          <ul>
            {shortcuts.map((item) => (
              <li key={item.key} className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
                {item.name} <span className="text-sm text-gray-500 dark:text-gray-400">Ctrl + {item.key.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
