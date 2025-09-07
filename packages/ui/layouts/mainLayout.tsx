import React, { ReactNode } from "react";
import { YoukyoukHeader } from "../YoukyoukHeader";
import { YoukyoukSidebar } from "../YoukyoukSidebar";
import { YoukyoukFooter } from "../YoukyoukFooter";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <YoukyoukSidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <YoukyoukHeader />

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>

        {/* Footer */}
        <YoukyoukFooter />
      </div>
    </div>
  );
};
