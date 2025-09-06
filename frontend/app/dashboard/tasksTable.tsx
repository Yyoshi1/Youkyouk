import React from 'react'

const tasks = [
  { id: 1, title: 'Design Homepage', status: 'In Progress' },
  { id: 2, title: 'Fix Login Bug', status: 'Pending' },
  { id: 3, title: 'Update Docs', status: 'Completed' },
]

const TasksTable: React.FC = () => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow overflow-x-auto">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tasks</h3>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Task
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{task.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
