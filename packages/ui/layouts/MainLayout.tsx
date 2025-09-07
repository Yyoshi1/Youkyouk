import React from "react";
import { YoukyoukHeader } from "../YoukyoukHeader";
import { YoukyoukSidebar } from "../YoukyoukSidebar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-50">
      <div className="flex flex-1 overflow-hidden">
        <YoukyoukSidebar />
        <div className="flex-1 flex flex-col">
          <YoukyoukHeader />
          <main className="p-6 overflow-auto flex-1">{children}</main>
        </div>
      </div>
      {/* Footer */}
      <footer className="h-12 bg-white border-t flex items-center justify-center text-xs text-neutral-400">
        © 2025 youkyouk. All rights reserved.
      </footer>
    </div>
  );
};
