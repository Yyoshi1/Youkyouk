import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function YourTeamsPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Your Teams">
      <Header title="Your Teams" />
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Team Alpha</h2>
        <p>Members: 5</p>
        <p>Projects: 3</p>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Team Beta</h2>
        <p>Members: 8</p>
        <p>Projects: 2</p>
      </div>
    </MainLayout>
  );
}
