import React from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

const UsersPage: React.FC = () => {
  useLicenseGuard();

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Users</h1>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">john@example.com</td>
              <td className="px-4 py-2">Admin</td>
              <td className="px-4 py-2 text-blue-500 cursor-pointer">Edit | Delete</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">jane@example.com</td>
              <td className="px-4 py-2">Member</td>
              <td className="px-4 py-2 text-blue-500 cursor-pointer">Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default UsersPage;
