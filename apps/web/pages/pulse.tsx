import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function PulsePage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Pulse">
      <Header title="Pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-bold text-gray-900 dark:text-gray-100">Project A</h2>
          <p className="text-gray-700 dark:text-gray-300">Status: Active</p>
          <p className="text-gray-700 dark:text-gray-300">Tasks: 12</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-bold text-gray-900 dark:text-gray-100">Project B</h2>
          <p className="text-gray-700 dark:text-gray-300">Status: In Progress</p>
          <p className="text-gray-700 dark:text-gray-300">Tasks: 8</p>
        </div>
      </div>
    </MainLayout>
  );
}
