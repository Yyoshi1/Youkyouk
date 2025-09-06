import React from 'react'

interface Task {
  id: number
  title: string
  status: string
  assignee: string
}

const tasks: Task[] = [
  { id: 1, title: 'Design Homepage', status: 'In Progress', assignee: 'Alice' },
  { id: 2, title: 'Setup Database', status: 'Pending', assignee: 'Bob' },
  { id: 3, title: 'Deploy App', status: 'Completed', assignee: 'Charlie' },
]

const TasksTable: React.FC = () => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow overflow-x-auto">
      <h3 className="text-lg font-medium mb-2">Tasks</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-3">ID</th>
            <th className="py-2 px-3">Title</th>
            <th className="py-2 px-3">Status</th>
            <th className="py-2 px-3">Assignee</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2 px-3">{task.id}</td>
              <td className="py-2 px-3">{task.title}</td>
              <td className="py-2 px-3">{task.status}</td>
              <td className="py-2 px-3">{task.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
