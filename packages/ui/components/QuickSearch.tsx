import React from "react";

export const QuickSearch: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Press Ctrl+E to search..."
      className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    />
  );
};
