import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function FavoritesPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Favorites">
      <Header title="Favorites" />
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Task 1</h2>
        <p className="text-gray-700 dark:text-gray-300">Project: Project A</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">Project B</h2>
        <p className="text-gray-700 dark:text-gray-300">Favorite Project</p>
      </div>
    </MainLayout>
  );
}
