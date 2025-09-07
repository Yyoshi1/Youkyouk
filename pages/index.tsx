import React from "react";
import { YoukyoukQuickSearch } from "../packages/ui/components/QuickSearch";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to Youkyouk Dashboard
      </h1>

      {/* Quick Search */}
      <div className="mb-6">
        <YoukyoukQuickSearch />
      </div>

      {/* Example sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Inbox</h2>
          <p className="text-gray-500 dark:text-gray-300">Your latest messages...</p>
        </div>

        <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">My Issues</h2>
          <p className="text-gray-500 dark:text-gray-300">Tasks assigned to you...</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
