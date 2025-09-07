import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  </div>
);
