import React from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

const RolesPage: React.FC = () => {
  useLicenseGuard();

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Roles</h1>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="text-gray-700 dark:text-gray-300">هنا يمكن إدارة الأدوار وصلاحياتها.</p>
        {/* */}
      </div>
    </AdminLayout>
  );
};

export default RolesPage;
