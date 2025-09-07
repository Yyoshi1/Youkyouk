import React, { useState } from "react";
import { Input } from "./Input";

export const QuickSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);

  return (
    <div className="relative">
      <Input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-700 shadow rounded mt-1 p-2 z-10">
          <p className="text-gray-500 dark:text-gray-300">Press Ctrl+E for shortcuts</p>
          {query && <p className="mt-2">Searching for: {query}</p>}
        </div>
      )}
    </div>
  );
};
