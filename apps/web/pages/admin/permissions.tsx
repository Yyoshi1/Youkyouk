import React, { useState } from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

interface Permission {
  id: number;
  name: string;
  description: string;
}

const PermissionsPage: React.FC = () => {
  useLicenseGuard();

  const [permissions, setPermissions] = useState<Permission[]>([
    { id: 1, name: "View Dashboard", description: "Access to dashboard" },
    { id: 2, name: "Edit Tasks", description: "Can edit tasks" },
  ]);

  const addPermission = () => {
    const newPermission: Permission = {
      id: Date.now(),
      name: "New Permission",
      description: "Description here",
    };
    setPermissions([...permissions, newPermission]);
  };

  const deletePermission = (id: number) => {
    setPermissions(permissions.filter((perm) => perm.id !== id));
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Permissions</h1>
        <button
          onClick={addPermission}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Permission
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((perm) => (
              <tr key={perm.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{perm.name}</td>
                <td className="px-4 py-2">{perm.description}</td>
                <td className="px-4 py-2 text-blue-500 cursor-pointer">
                  <span className="mr-2">Edit</span>
                  <span onClick={() => deletePermission(perm.id)}>Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default PermissionsPage;
