import React, { useState } from "react";
import { Input } from "./Input";

export const QuickSearch: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Quick search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">
        Search
      </button>
    </form>
  );
};
