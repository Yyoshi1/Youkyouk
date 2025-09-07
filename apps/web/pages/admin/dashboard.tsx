import React from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

const DashboardPage: React.FC = () => {
  useLicenseGuard();

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>

      {/* Cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-bold text-gray-900 dark:text-white">المشاريع</h2>
          <p className="text-gray-700 dark:text-gray-300">12 مشروع نشط</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-bold text-gray-900 dark:text-white">المهام</h2>
          <p className="text-gray-700 dark:text-gray-300">34 مهمة مفتوحة</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-bold text-gray-900 dark:text-white">الإشعارات</h2>
          <p className="text-gray-700 dark:text-gray-300">7 إشعارات جديدة</p>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="font-bold text-gray-900 dark:text-white mb-4">أداء الفرق</h2>
        <div className="h-64 flex items-center justify-center text-gray-400 dark:text-gray-500">
          {/*  Chart.js/Recharts */}
          [Chart Placeholder]
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
