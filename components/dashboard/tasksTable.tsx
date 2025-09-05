import React, { useState } from 'react'

interface Task {
  id: number
  name: string
  project: string
  status: 'Pending' | 'In Progress' | 'Completed'
  dueDate: string
}

const initialTasks: Task[] = [
  { id: 1, name: 'Design Homepage', project: 'Project Alpha', status: 'In Progress', dueDate: '2025-09-10' },
  { id: 2, name: 'Setup Backend', project: 'Project Beta', status: 'Pending', dueDate: '2025-09-12' },
  { id: 3, name: 'Write Docs', project: 'Project Gamma', status: 'Completed', dueDate: '2025-09-05' },
  // 
]

const TasksTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [sortAsc, setSortAsc] = useState(true)

  const toggleSort = () => {
    const sorted = [...tasks].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    )
    setTasks(sorted)
    setSortAsc(!sortAsc)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th
              className="text-left px-4 py-2 cursor-pointer"
              onClick={toggleSort}
            >
              Task Name
            </th>
            <th className="text-left px-4 py-2">Project</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{task.name}</td>
              <td className="px-4 py-2">{task.project}</td>
              <td className="px-4 py-2">{task.status}</td>
              <td className="px-4 py-2">{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
