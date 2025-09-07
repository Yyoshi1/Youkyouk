import React, { useState, useEffect, useRef } from "react";

interface QuickSearchItem {
  id: number;
  title: string;
  subtitle?: string;
  group?: string;
}

const sampleData: QuickSearchItem[] = [
  { id: 1, title: "Dashboard", group: "Main" },
  { id: 2, title: "Projects", group: "Main" },
  { id: 3, title: "Teams", group: "Main" },
  { id: 4, title: "Settings", group: "Main" },
  { id: 5, title: "Users", group: "Admin" },
  { id: 6, title: "Workspaces", group: "Admin" },
  { id: 7, title: "Your Teams", group: "Admin" },
];

export const QuickSearch: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<QuickSearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // فتح البحث بالـ Ctrl+E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "e") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      if (e.key === "Escape") setOpen(false);

      if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIndex(prev => (prev + 1) % results.length);
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIndex(prev => (prev - 1 + results.length) % results.length);
        }
        if (e.key === "Enter" && results[activeIndex]) {
          alert(`Selected: ${results[activeIndex].title}`);
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, results, activeIndex]);

  // فلترة النتائج حسب البحث
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setActiveIndex(0);
    } else {
      const filtered = sampleData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setActiveIndex(0);
    }
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      onClick={() => setOpen(false)} // الضغط في أي مكان خارج الصندوق يغلقه
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96 p-4"
        onClick={e => e.stopPropagation()} // منع إغلاق عند الضغط داخل الصندوق
      >
        <input
          ref={inputRef}
          type="text"
          className="w-full p-2 border rounded text-gray-900 dark:text-white dark:bg-gray-700"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <ul className="mt-2 max-h-64 overflow-auto">
          {results.length === 0 && query ? (
            <li className="p-2 text-gray-500 dark:text-gray-400">No results found</li>
          ) : (
            results.map((item, index) => (
              <li
                key={item.id}
                className={`p-2 rounded cursor-pointer ${
                  index === activeIndex ? "bg-blue-100 dark:bg-blue-600" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  alert(`Selected: ${item.title}`);
                  setOpen(false);
                }}
              >
                {item.group && (
                  <span className="text-xs text-gray-400 dark:text-gray-500">{item.group} • </span>
                )}
                {item.title}
                {item.subtitle && (
                  <span className="text-sm text-gray-500 dark:text-gray-400"> - {item.subtitle}</span>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
