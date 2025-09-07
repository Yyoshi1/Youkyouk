// pages/projects/index.tsx
import React from "react";
import { Header } from "../../packages/ui/components/Header";
import { Sidebar } from "../../packages/ui/components/Sidebar";

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Project A</h2>
              <p className="text-gray-500 dark:text-gray-300">All tasks and details for Project A.</p>
            </div>

            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Project B</h2>
              <p className="text-gray-500 dark:text-gray-300">All tasks and details for Project B.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
