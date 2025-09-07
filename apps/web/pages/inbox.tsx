import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { Header } from "../packages/ui/components/Header";

export default function InboxPage() {
  useLicenseGuard();

  return (
    <MainLayout activePage="Inbox">
      <Header title="Inbox" />
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="text-gray-900 dark:text-gray-100">
        </p>
      </div>
    </MainLayout>
  );
}
