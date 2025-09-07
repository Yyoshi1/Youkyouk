import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";
import { YoukyoukAvatar } from "../../packages/ui/YoukyoukAvatar";

export const WorkspacesPage: React.FC = () => {
  const workspaces = [
    { id: 1, name: "youkyouk Website", members: 12 },
    { id: 2, name: "youkyouk Mobile", members: 8 },
    { id: 3, name: "youkyouk API", members: 5 },
  ];

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Workspaces</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workspaces.map((ws) => (
            <div key={ws.id} className="bg-white rounded-lg shadow p-4 flex items-center space-x-3 hover:bg-neutral-50">
              <YoukyoukAvatar size={10} name={ws.name[0]} />
              <div>
                <p className="font-medium">{ws.name}</p>
                <p className="text-xs text-neutral-400">{ws.members} members</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
