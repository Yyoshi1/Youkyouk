import React from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

const PermissionsPage: React.FC = () => {
  useLicenseGuard();

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Permissions</h1>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="text-gray-700 dark:text-gray-300">
        </p>
      </div>
    </AdminLayout>
  );
};

export default PermissionsPage;
