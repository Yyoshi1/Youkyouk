import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";
import { YoukyoukAvatar } from "../../packages/ui/YoukyoukAvatar";

export const PulsePage: React.FC = () => {
  const activities = [
    { id: 1, user: "Alice", action: "closed", target: "Issue #24", project: "youkyouk Website", time: "2h ago" },
    { id: 2, user: "Bob", action: "commented on", target: "PR #12", project: "youkyouk API", time: "5h ago" },
    { id: 3, user: "Charlie", action: "opened", target: "Issue #45", project: "youkyouk Mobile", time: "1d ago" },
  ];

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Pulse</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul>
            {activities.map((act) => (
              <li key={act.id} className="flex items-center justify-between px-4 py-3 border-b hover:bg-neutral-50">
                <div className="flex items-center space-x-3">
                  <YoukyoukAvatar size={8} name={act.user[0]} />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{act.user}</span> {act.action} <span className="font-medium">{act.target}</span> in {act.project}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-neutral-400">{act.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
