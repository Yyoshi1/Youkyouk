import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
