// packages/ui/layouts/MainLayout.tsx
import React, { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AdminSidebar from "../components/AdminSidebar";

interface MainLayoutProps {
  children: ReactNode;
  isAdmin?: boolean; // 
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, isAdmin = false }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      {isAdmin ? <AdminSidebar /> : <Sidebar />}

      {/*  */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
