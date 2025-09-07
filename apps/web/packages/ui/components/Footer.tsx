import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-4 bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Youkyouk. All rights reserved.
    </footer>
  );
};
