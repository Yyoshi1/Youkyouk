import React from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

const SettingsPage: React.FC = () => {
  useLicenseGuard();

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Project Name</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            defaultValue="Youkyouk"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Dark Mode</label>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">License Key</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            placeholder="Enter license key"
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingsPage;
