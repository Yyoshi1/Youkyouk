import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function MyIssuesPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="My Issues">
      <Header title="My Issues" />
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Issue 1</h2>
        <p>Status: Open</p>
        <p>Description: Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-bold">Issue 2</h2>
        <p>Status: In Progress</p>
        <p>Description: Curabitur lobortis id lorem id bibendum.</p>
      </div>
    </MainLayout>
  );
}
