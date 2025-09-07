import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

const WorkspacesPage: React.FC = () => {
  useLicenseGuard();

  const workspaces = [
    { id: 1, name: "Initiatives" },
    { id: 2, name: "Projects" },
    { id: 3, name: "Views" },
    { id: 4, name: "Members" },
    { id: 5, name: "Teams" },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Workspaces</h1>
      <ul className="space-y-2">
        {workspaces.map((ws) => (
          <li key={ws.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
            {ws.name}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default WorkspacesPage;
