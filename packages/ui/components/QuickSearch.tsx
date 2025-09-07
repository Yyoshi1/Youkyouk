import React, { useState } from "react";

export const QuickSearch: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Press Ctrl+E to search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
    />
  );
};
