import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function MyIssuesPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="My Issues">
      <Header title="My Issues" />
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Issue 1</h2>
        <p className="text-gray-700 dark:text-gray-300">Status: Open</p>
        <p className="text-gray-700 dark:text-gray-300">Description: Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Issue 2</h2>
        <p className="text-gray-700 dark:text-gray-300">Status: In Progress</p>
        <p className="text-gray-700 dark:text-gray-300">Description: Curabitur lobortis id lorem id bibendum.</p>
      </div>
    </MainLayout>
  );
}
