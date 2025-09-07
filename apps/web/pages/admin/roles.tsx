import React, { useState } from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

interface Role {
  id: number;
  name: string;
  description: string;
}

const RolesPage: React.FC = () => {
  useLicenseGuard();

  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: "Admin", description: "Full access" },
    { id: 2, name: "Member", description: "Limited access" },
  ]);

  const addRole = () => {
    const newRole: Role = {
      id: Date.now(),
      name: "New Role",
      description: "Description here",
    };
    setRoles([...roles, newRole]);
  };

  const deleteRole = (id: number) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Roles</h1>
        <button
          onClick={addRole}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Role
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
            {roles.map((role) => (
              <tr key={role.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{role.name}</td>
                <td className="px-4 py-2">{role.description}</td>
                <td className="px-4 py-2 text-blue-500 cursor-pointer">
                  <span className="mr-2">Edit</span>
                  <span onClick={() => deleteRole(role.id)}>Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default RolesPage;
