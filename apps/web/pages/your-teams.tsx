import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

const YourTeamsPage: React.FC = () => {
  useLicenseGuard();

  const teams = [
    { id: 1, name: "Frontend Team", members: 5 },
    { id: 2, name: "Backend Team", members: 4 },
    { id: 3, name: "Design Team", members: 3 },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Teams</h1>
      <ul className="space-y-2">
        {teams.map((team) => (
          <li key={team.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">{team.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{team.members} members</span>
            </div>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default YourTeamsPage;
