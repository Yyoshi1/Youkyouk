import React from "react";
import { YoukyoukHeader } from "../YoukyoukHeader";
import { YoukyoukSidebar } from "../YoukyoukSidebar";
import { ThemeProvider } from "../context/ThemeContext";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="flex flex-1 overflow-hidden">
          <YoukyoukSidebar />
          <div className="flex-1 flex flex-col">
            <YoukyoukHeader />
            <main className="p-6 overflow-auto flex-1">{children}</main>
          </div>
        </div>
        <footer className="h-12 bg-white dark:bg-neutral-800 border-t flex items-center justify-center text-xs text-neutral-400">
          © 2025 youkyouk. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
};
