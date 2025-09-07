import React, { useState } from "react";
import { QuickSearchIcon } from "../icons/Icons";

export const QuickSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="relative">
      <QuickSearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};
