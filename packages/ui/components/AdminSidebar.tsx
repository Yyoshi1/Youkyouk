import React from "react";
import Link from "next/link";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4 space-y-2">
      <Link href="/admin/dashboard"><a className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</a></Link>
      <Link href="/admin/users"><a className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Users</a></Link>
      <Link href="/admin/roles"><a className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Roles</a></Link>
      <Link href="/admin/permissions"><a className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Permissions</a></Link>
    </aside>
  );
};
