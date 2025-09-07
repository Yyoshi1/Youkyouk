import React from "react";
import Link from "next/link";

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 font-bold text-xl text-gray-900 dark:text-white">
        Youkyouk Admin
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <Link href="/admin/dashboard">
          <a className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</a>
        </Link>
        <Link href="/admin/users">
          <a className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Users</a>
        </Link>
        <Link href="/admin/roles">
          <a className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Roles</a>
        </Link>
        <Link href="/admin/permissions">
          <a className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Permissions</a>
        </Link>
        <Link href="/admin/settings">
          <a className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Settings</a>
        </Link>
      </nav>
    </aside>
  );
};
