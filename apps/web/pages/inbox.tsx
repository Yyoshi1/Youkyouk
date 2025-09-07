import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

const InboxPage: React.FC = () => {
  useLicenseGuard();

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Inbox</h1>
      {/*  */}
    </MainLayout>
  );
};

export default InboxPage;
