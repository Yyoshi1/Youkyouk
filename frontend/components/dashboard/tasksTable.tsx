import React from 'react'

const tasks = [
  { id: 1, title: 'Design Homepage', status: 'In Progress', assignee: 'Alice' },
  { id: 2, title: 'API Integration', status: 'Pending', assignee: 'Bob' },
  { id: 3, title: 'Write Documentation', status: 'Completed', assignee: 'Charlie' },
  { id: 4, title: 'Testing Features', status: 'In Progress', assignee: 'Dana' },
]

const TasksTable: React.FC = () => {
  return (
    <div className="mt-6 overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Task</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Assignee</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{task.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{task.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{task.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
