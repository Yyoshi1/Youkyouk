import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function InboxPage() {
  useLicenseGuard(); // 

  return (
    <MainLayout activePage="Inbox">
      <Header title="Inbox" />
      <div className="bg-white p-4 rounded shadow">
        <p> </p>
      </div>
    </MainLayout>
  );
}
