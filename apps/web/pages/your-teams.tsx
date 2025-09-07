import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function YourTeamsPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Your Teams">
      <Header title="Your Teams" />
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Team Alpha</h2>
        <p className="text-gray-700 dark:text-gray-300">Members: 5</p>
        <p className="text-gray-700 dark:text-gray-300">Projects: 3</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Team Beta</h2>
        <p className="text-gray-700 dark:text-gray-300">Members: 8</p>
        <p className="text-gray-700 dark:text-gray-300">Projects: 2</p>
      </div>
    </MainLayout>
  );
}
