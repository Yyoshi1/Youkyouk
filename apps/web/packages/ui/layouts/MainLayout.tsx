import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/*  */}
        <main className="flex-1 p-4 overflow-auto">{children}</main>

        {/* Footer */}
        <footer className="p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center">
          © 2025 Youkyouk. All rights reserved.
        </footer>
      </div>
    </div>
  );
};
