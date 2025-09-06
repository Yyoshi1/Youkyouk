import React from 'react'

const tasks = [
  { id: 1, name: 'Design Landing Page', status: 'In Progress' },
  { id: 2, name: 'Fix Login Bug', status: 'Pending' },
  { id: 3, name: 'Deploy Backend API', status: 'Completed' },
]

const TasksTable: React.FC = () => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-gray-900 dark:text-white">Task</th>
            <th className="px-6 py-3 text-left text-gray-900 dark:text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-gray-900 dark:text-white">{task.name}</td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
