import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function WorkspacesPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Workspaces">
      <Header title="Workspaces" />
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Initiatives</h2>
        <p>List of initiatives</p>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Projects</h2>
        <p>List of projects</p>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Views</h2>
        <p>Custom views</p>
      </div>
    </MainLayout>
  );
}
