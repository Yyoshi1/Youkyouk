import React, { useState } from "react";
import { AdminLayout } from "../../../packages/ui/layouts/AdminLayout";
import { useLicenseGuard } from "../../../packages/ui/license/useLicenseGuard";

interface Task {
  id: number;
  title: string;
  assignedTo: string;
  status: "Open" | "In Progress" | "Done";
}

interface Project {
  id: number;
  name: string;
  tasks: Task[];
}

const DashboardPage: React.FC = () => {
  useLicenseGuard();

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Project Alpha",
      tasks: [
        { id: 1, title: "Design UI", assignedTo: "John Doe", status: "Open" },
        { id: 2, title: "Setup Backend", assignedTo: "Jane Smith", status: "In Progress" },
      ],
    },
  ]);

  // 
  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      name: `New Project ${projects.length + 1}`,
      tasks: [],
    };
    setProjects([...projects, newProject]);
  };

  // 
  const addTask = (projectId: number) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                {
                  id: Date.now(),
                  title: "New Task",
                  assignedTo: "Unassigned",
                  status: "Open",
                },
              ],
            }
          : project
      )
    );
  };

  // 
  const updateTaskStatus = (projectId: number, taskId: number, status: Task["status"]) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, status } : task
              ),
            }
          : project
      )
    );
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <button
          onClick={addProject}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h2>
            <button
              onClick={() => addTask(project.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              + Add Task
            </button>
          </div>

          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-4 py-2 text-left">Task</th>
                <th className="px-4 py-2 text-left">Assigned To</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {project.tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2">{task.title}</td>
                  <td className="px-4 py-2">{task.assignedTo}</td>
                  <td className="px-4 py-2">
                    <select
                      value={task.status}
                      onChange={(e) =>
                        updateTaskStatus(
                          project.id,
                          task.id,
                          e.target.value as Task["status"]
                        )
                      }
                      className="border rounded px-2 py-1"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  </td>
                  <td className="px-4 py-2 text-blue-500 cursor-pointer">
                    {/* Edit/Delete */}
                    Edit | Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </AdminLayout>
  );
};

export default DashboardPage;
