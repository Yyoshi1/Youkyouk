// pages/index.tsx
import React from "react";
import { QuickSearch } from "../packages/ui/components/QuickSearch";
import { Header } from "../packages/ui/components/Header";
import { Sidebar } from "../packages/ui/components/Sidebar";

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome to Youkyouk Dashboard
          </h1>

          {/* Quick Search */}
          <div className="mb-6">
            <QuickSearch />
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
        </main>
      </div>
    </div>
  );
};

export default HomePage;
