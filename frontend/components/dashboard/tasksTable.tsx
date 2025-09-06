// frontend/components/dashboard/TasksTable.tsx
import React from 'react'

interface Task {
  id: number
  title: string
  assignedTo: string
  status: string
  dueDate: string
}

const tasks: Task[] = [
  { id: 1, title: 'Design landing page', assignedTo: 'Alice', status: 'In Progress', dueDate: '2025-09-10' },
  { id: 2, title: 'Setup database', assignedTo: 'Bob', status: 'Completed', dueDate: '2025-09-08' },
  { id: 3, title: 'Implement auth', assignedTo: 'Charlie', status: 'Pending', dueDate: '2025-09-12' },
  { id: 4, title: 'Write unit tests', assignedTo: 'Dana', status: 'In Progress', dueDate: '2025-09-11' },
]

const TasksTable: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mt-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tasks</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Title</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Assigned To</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{task.title}</td>
                <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{task.assignedTo}</td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs ${
                      task.status === 'Completed'
                        ? 'bg-green-500'
                        : task.status === 'In Progress'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TasksTable
