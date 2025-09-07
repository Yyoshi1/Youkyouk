import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";
import { YoukyoukAvatar } from "../../packages/ui/YoukyoukAvatar";

export const MyIssuesPage: React.FC = () => {
  const issues = [
    { id: 1, project: "youkyouk Website", title: "Fix login bug", assignedTo: "Alice", status: "Open", time: "3h ago" },
    { id: 2, project: "youkyouk Mobile", title: "Update onboarding flow", assignedTo: "Bob", status: "In Progress", time: "5h ago" },
    { id: 3, project: "youkyouk API", title: "Review PR #12", assignedTo: "Charlie", status: "Open", time: "1d ago" },
  ];

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">My Issues</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul>
            {issues.map((issue) => (
              <li key={issue.id} className="flex items-center justify-between px-4 py-3 border-b hover:bg-neutral-50">
                <div className="flex items-center space-x-3">
                  <YoukyoukAvatar size={8} name={issue.assignedTo[0]} />
                  <div>
                    <p className="text-sm font-medium">{issue.project}</p>
                    <p className="text-sm text-neutral-500">{issue.title}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-neutral-400">{issue.status}</span>
                  <span className="text-xs text-neutral-400">{issue.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
