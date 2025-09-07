import React, { useState } from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UsersPage: React.FC = () => {
  useLicenseGuard();

  // 
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Member" },
  ]);

  // 
  const addUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
      role: "Member",
    };
    setUsers([...users, newUser]);
  };

  //
  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h1>
        <button
          onClick={addUser}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add User
        </button>
      </div>

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
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 text-blue-500 cursor-pointer">
                  <span className="mr-2">Edit</span>
                  <span onClick={() => deleteUser(user.id)}>Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default UsersPage;
