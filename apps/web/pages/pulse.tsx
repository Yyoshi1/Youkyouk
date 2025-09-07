import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function PulsePage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Pulse">
      <Header title="Pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Project A</h2>
          <p>Status: Active</p>
          <p>Tasks: 12</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Project B</h2>
          <p>Status: In Progress</p>
          <p>Tasks: 8</p>
        </div>
      </div>
    </MainLayout>
  );
}
