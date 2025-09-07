import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export const YourTeamsPage: React.FC = () => {
  useLicenseGuard();

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Teams</h1>
      {/* */}
    </MainLayout>
  );
};

export default YourTeamsPage;
