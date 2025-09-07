// pages/projects/[projectId].tsx
import React from "react";
import { useRouter } from "next/router";
import { Header } from "../../packages/ui/components/Header";
import { Sidebar } from "../../packages/ui/components/Sidebar";

const ProjectDetail: React.FC = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Project: {projectId}
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Tasks</h2>
              <p className="text-gray-500 dark:text-gray-300">List of all tasks in this project assigned to the team.</p>
            </div>

            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Team Members</h2>
              <p className="text-gray-500 dark:text-gray-300">All members involved in this project.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
