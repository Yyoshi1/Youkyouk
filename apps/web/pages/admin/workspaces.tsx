import React, { useState } from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

interface Team {
  id: number;
  name: string;
  members: string[];
}

interface Workspace {
  id: number;
  name: string;
  teams: Team[];
}

const WorkspacesPage: React.FC = () => {
  useLicenseGuard();

  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    {
      id: 1,
      name: "Marketing Workspace",
      teams: [
        { id: 1, name: "Design Team", members: ["John Doe", "Jane Smith"] },
      ],
    },
  ]);

  // 
  const addWorkspace = () => {
    const newWorkspace: Workspace = {
      id: Date.now(),
      name: `New Workspace ${workspaces.length + 1}`,
      teams: [],
    };
    setWorkspaces([...workspaces, newWorkspace]);
  };

  // 
  const addTeam = (workspaceId: number) => {
    setWorkspaces(
      workspaces.map((ws) =>
        ws.id === workspaceId
          ? {
              ...ws,
              teams: [
                ...ws.teams,
                { id: Date.now(), name: "New Team", members: [] },
              ],
            }
          : ws
      )
    );
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Workspaces</h1>
        <button
          onClick={addWorkspace}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Workspace
        </button>
      </div>

      {workspaces.map((ws) => (
        <div key={ws.id} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{ws.name}</h2>
            <button
              onClick={() => addTeam(ws.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              + Add Team
            </button>
          </div>

          <div>
            {ws.teams.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No teams yet.</p>
            ) : (
              <ul className="space-y-2">
                {ws.teams.map((team) => (
                  <li key={team.id} className="p-2 border rounded border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{team.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        Members: {team.members.length}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </AdminLayout>
  );
};

export default WorkspacesPage;
