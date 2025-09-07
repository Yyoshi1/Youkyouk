import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activePage,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar activePage={activePage} />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
