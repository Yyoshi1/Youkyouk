import React from "react";
import { Header } from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/*  */}
      <Header />

      {/* */}
      <main className="flex-1 p-4">{children}</main>

      {/* */}
      <footer className="p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center">
        © 2025 Youkyouk. All rights reserved.
      </footer>
    </div>
  );
};
