import React from "react";
import Link from "next/link";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 h-screen p-4 space-y-2">
      <Link href="/dashboard"><a className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</a></Link>
      <Link href="/projects"><a className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a></Link>
      <Link href="/teams"><a className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Teams</a></Link>
    </aside>
  );
};
