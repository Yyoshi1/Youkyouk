import React, { useState, useEffect } from "react";
import { YoukyoukQuickSearch } from "./YoukyoukQuickSearch";
import { YoukyoukAvatar } from "./YoukyoukAvatar";

export const YoukyoukHeader: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "e") {
      e.preventDefault();
      setShowSearch((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-xl">youkyouk</span>
        <input
          type="text"
          placeholder="Search…"
          className="hidden md:block px-3 py-1 border rounded w-64 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <YoukyoukAvatar size={8} name="U" />
      </div>

      {showSearch && <YoukyoukQuickSearch />}
    </header>
  );
};
