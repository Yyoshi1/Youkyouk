import React from "react";
import { useTheme } from "./context/ThemeContext";

export const YoukyoukHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-neutral-900 border-b flex items-center justify-between px-6">
      <div className="font-bold text-lg">youkyouk</div>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 border rounded text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};
