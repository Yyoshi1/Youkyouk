import React from "react";
import { AdminLayout } from "../../packages/ui/layouts/AdminLayout";

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>

        {/* Example Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
              Inbox
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Latest messages...
            </p>
          </div>

          <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
              My Issues
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Tasks assigned to you...
            </p>
          </div>

          <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
              Pulse
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Recent activity overview...
            </p>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
