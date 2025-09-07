// packages/ui/components/Footer.tsx
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-white dark:bg-gray-800 shadow text-center text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Youkyouk. All rights reserved.
    </footer>
  );
};
