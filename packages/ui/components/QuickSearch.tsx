// packages/ui/components/QuickSearch.tsx
import React, { useState, useEffect } from "react";

export const QuickSearch: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "e") {
      e.preventDefault();
      setOpen(true);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow w-96"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search..."
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          autoFocus
        />
      </div>
    </div>
  );
};
