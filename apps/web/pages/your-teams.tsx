import React, { useState } from "react";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

interface Team {
  id: number;
  name: string;
  members: string[];
}

export const YourTeamsPage: React.FC = () => {
  useLicenseGuard();

  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "Design Team", members: ["John Doe", "Jane Smith"] },
    { id: 2, name: "Marketing Team", members: ["Alice", "Bob"] },
  ]);

  const addMember = (teamId: number) => {
    const memberName = prompt("Enter member name");
    if (!memberName) return;
    setTeams(
      teams.map((team) =>
        team.id === teamId
          ? { ...team, members: [...team.members, memberName] }
          : team
      )
    );
  };

  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Teams</h1>
        {teams.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No teams yet.</p>
        ) : (
          <ul className="space-y-4">
            {teams.map((team) => (
              <li
                key={team.id}
                className="bg-white dark:bg-gray-800 p-4 rounded shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">{team.name}</span>
                  <button
                    onClick={() => addMember(team.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    + Add Member
                  </button>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  Members: {team.members.join(", ")}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  );
};

export default YourTeamsPage;
