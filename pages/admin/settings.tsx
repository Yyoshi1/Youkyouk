// pages/admin/settings.tsx
import React from "react";
import { Header } from "../../packages/ui/components/Header";
import { AdminSidebar } from "../../packages/ui/components/AdminSidebar";

const AdminSettings: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            System Settings
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">General</h2>
              <p className="text-gray-500 dark:text-gray-300">Configure general settings...</p>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Notifications</h2>
              <p className="text-gray-500 dark:text-gray-300">Manage system notifications...</p>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Integrations</h2>
              <p className="text-gray-500 dark:text-gray-300">API keys and external services...</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;
