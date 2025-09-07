import React from "react";
import { YoukyoukHeader } from "../YoukyoukHeader";
import { YoukyoukSidebar } from "../YoukyoukSidebar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen bg-neutral-50">
      <YoukyoukSidebar />
      <div className="flex-1 flex flex-col">
        <YoukyoukHeader />
        <main className="p-6 overflow-auto flex-1">{children}</main>
      </div>
    </div>
  );
};
