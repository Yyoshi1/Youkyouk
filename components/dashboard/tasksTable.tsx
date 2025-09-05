import React, { useState } from 'react'

interface Task {
  id: number
  title: string
  project: string
  assignee: string
  dueDate: string
  status: 'Pending' | 'In Progress' | 'Completed'
}

const initialTasks: Task[] = [
  { id: 1, title: 'Design Landing Page', project: 'Website Redesign', assignee: 'Alice', dueDate: '2025-09-10', status: 'In Progress' },
  { id: 2, title: 'Setup Database', project: 'Youkyouk Backend', assignee: 'Bob', dueDate: '2025-09-12', status: 'Pending' },
  { id: 3, title: 'Create Dashboard Cards', project: 'Youkyouk Frontend', assignee: 'Charlie', dueDate: '2025-09-08', status: 'Completed' },
]

const TasksTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow overflow-x-auto">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Project</th>
            <th className="px-4 py-2">Assignee</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
              <td className="px-4 py-2">{task.title}</td>
              <td className="px-4 py-2">{task.project}</td>
              <td className="px-4 py-2">{task.assignee}</td>
              <td className="px-4 py-2">{task.dueDate}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    task.status === 'Completed'
                      ? 'bg-green-500'
                      : task.status === 'In Progress'
                      ? 'bg-blue-500'
                      : 'bg-gray-500'
                  }`}
                >
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
