import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";
import { YoukyoukAvatar } from "../../packages/ui/YoukyoukAvatar";

export const YourTeamsPage: React.FC = () => {
  const teams = [
    { id: 1, name: "Frontend Team", members: 8, projects: 3 },
    { id: 2, name: "Backend Team", members: 5, projects: 2 },
    { id: 3, name: "Design Team", members: 4, projects: 2 },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold mb-4">Your Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-lg shadow p-4 hover:bg-neutral-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <YoukyoukAvatar size={10} name={team.name[0]} />
              <div>
                <p className="font-medium">{team.name}</p>
                <p className="text-xs text-neutral-400">{team.members} • {team.projects}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};
