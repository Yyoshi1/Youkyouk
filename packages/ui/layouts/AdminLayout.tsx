import React from "react";
import Link from "next/link";

export const AdminSidebar: React.FC = () => {
  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Users", href: "/admin/users" },
    { name: "Roles", href: "/admin/roles" },
    { name: "Permissions", href: "/admin/permissions" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-screen">
      <div className="p-6 font-bold text-lg text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
        Admin Panel
      </div>
      <ul className="mt-6">
        {menuItems.map((item) => (
          <li key={item.href} className="px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link href={item.href}>
              <a className="text-gray-700 dark:text-gray-200">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
