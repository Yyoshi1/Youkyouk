import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function FavoritesPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Favorites">
      <Header title="Favorites" />
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Task 1</h2>
        <p>Project: Project A</p>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Project B</h2>
        <p>Favorite Project</p>
      </div>
    </MainLayout>
  );
}
