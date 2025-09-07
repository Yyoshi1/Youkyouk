import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function WorkspacesPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Workspaces">
      <Header title="Workspaces" />
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Initiatives</h2>
        <p className="text-gray-700 dark:text-gray-300">List of initiatives</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Projects</h2>
        <p className="text-gray-700 dark:text-gray-300">List of projects</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Views</h2>
        <p className="text-gray-700 dark:text-gray-300">Custom views</p>
      </div>
    </MainLayout>
  );
}
