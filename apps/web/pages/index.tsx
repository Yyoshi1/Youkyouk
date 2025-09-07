import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";

export const DashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards Example */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">My Projects</h2>
          <p className="text-sm text-neutral-500">Overview of your active projects</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">My Issues</h2>
          <p className="text-sm text-neutral-500">Recent issues assigned to you</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Team Updates</h2>
          <p className="text-sm text-neutral-500">Latest activities from your teams</p>
        </div>
      </div>
    </MainLayout>
  );
};
