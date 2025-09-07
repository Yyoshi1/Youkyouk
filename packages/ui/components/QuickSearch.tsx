import React, { useState, useEffect, useRef } from "react";

interface QuickSearchItem {
  id: number;
  title: string;
  subtitle?: string;
}

const sampleData: QuickSearchItem[] = [
  { id: 1, title: "Dashboard" },
  { id: 2, title: "Projects" },
  { id: 3, title: "Teams" },
  { id: 4, title: "Settings" },
  { id: 5, title: "Users" },
  { id: 6, title: "Workspaces" },
];

export const QuickSearch: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<QuickSearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // تفعيل Ctrl+E لفتح البحث
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "e") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = sampleData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96 p-4">
        <input
          ref={inputRef}
          type="text"
          className="w-full p-2 border rounded text-gray-900 dark:text-white dark:bg-gray-700"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <ul className="mt-2 max-h-64 overflow-auto">
          {results.map(item => (
            <li
              key={item.id}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => alert(`Selected: ${item.title}`)}
            >
              {item.title}
              {item.subtitle && <span className="text-sm text-gray-500 dark:text-gray-400"> - {item.subtitle}</span>}
            </li>
          ))}
          {results.length === 0 && query && (
            <li className="p-2 text-gray-500 dark:text-gray-400">No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
};
