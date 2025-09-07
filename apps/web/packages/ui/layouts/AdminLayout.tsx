import React, { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AdminSidebar } from "../components/AdminSidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
