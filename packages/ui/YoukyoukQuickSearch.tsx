import React, { useState, useEffect } from "react";

interface SearchItem {
  id: number;
  type: string;
  title: string;
  project: string;
}

export const YoukyoukQuickSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const items: SearchItem[] = [
    { id: 1, type: "Issue", title: "Fix login bug", project: "youkyouk Website" },
    { id: 2, type: "Project", title: "Mobile App Redesign", project: "youkyouk Mobile" },
    { id: 3, type: "PR", title: "Update API Docs", project: "youkyouk API" },
  ];

  useEffect(() => {
    if (query === "") {
      setResults([]);
    } else {
      setResults(
        items.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.project.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg">
        <input
          type="text"
          autoFocus
          placeholder="Search…"
          className="w-full px-4 py-3 border-b focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="max-h-96 overflow-auto">
          {results.map((item) => (
            <li key={item.id} className="px-4 py-3 hover:bg-neutral-50 cursor-pointer">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-neutral-400">{item.project} • {item.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
