// /components/dashboard/TasksTable.tsx
import React from 'react'

interface Task {
  id: number
  title: string
  assignee: string
  status: 'Pending' | 'In Progress' | 'Completed'
  dueDate: string
}

const tasks: Task[] = [
  { id: 1, title: 'Design homepage', assignee: 'Alice', status: 'In Progress', dueDate: '2025-09-10' },
  { id: 2, title: 'Develop API endpoints', assignee: 'Bob', status: 'Pending', dueDate: '2025-09-12' },
  { id: 3, title: 'Test login flow', assignee: 'Charlie', status: 'Completed', dueDate: '2025-09-08' },
  { id: 4, title: 'Setup CI/CD pipeline', assignee: 'Diana', status: 'In Progress', dueDate: '2025-09-15' },
]

const statusColor = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-200 text-yellow-800'
    case 'In Progress':
      return 'bg-blue-200 text-blue-800'
    case 'Completed':
      return 'bg-green-200 text-green-800'
    default:
      return ''
  }
}

const TasksTable: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow mt-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tasks</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Assignee</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                <td className="px-4 py-2 text-gray-900 dark:text-white">{task.title}</td>
                <td className="px-4 py-2 text-gray-900 dark:text-white">{task.assignee}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-900 dark:text-white">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TasksTable
