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
  { id: 4, title: 'API Integration', project: 'Youkyouk Backend', assignee: 'David', dueDate: '2025-09-15', status: 'In Progress' },
  { id: 5, title: 'Write Tests', project: 'Youkyouk Frontend', assignee: 'Eve', dueDate: '2025-09-20', status: 'Pending' },
]

const TasksTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [sortField, setSortField] = useState<keyof Task>('title')
  const [sortAsc, setSortAsc] = useState(true)
  const [filterStatus, setFilterStatus] = useState<'All' | Task['status']>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 3

  const filteredTasks = tasks.filter((task) =>
    filterStatus === 'All' ? true : task.status === filterStatus
  )

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortAsc ? -1 : 1
    if (a[sortField] > b[sortField]) return sortAsc ? 1 : -1
    return 0
  })

  const totalPages = Math.ceil(sortedTasks.length / pageSize)
  const paginatedTasks = sortedTasks.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const handleSort = (field: keyof Task) => {
    if (sortField === field) setSortAsc(!sortAsc)
    else {
      setSortField(field)
      setSortAsc(true)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow overflow-x-auto p-4 space-y-4">
      {/* Filter */}
      <div className="flex items-center space-x-2">
        <span>Status:</span>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as any)}
          className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Table */}
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 dark:bg-gray-700 cursor-pointer">
          <tr>
            <th className="px-4 py-2" onClick={() => handleSort('title')}>Title</th>
            <th className="px-4 py-2" onClick={() => handleSort('project')}>Project</th>
            <th className="px-4 py-2" onClick={() => handleSort('assignee')}>Assignee</th>
            <th className="px-4 py-2" onClick={() => handleSort('dueDate')}>Due Date</th>
            <th className="px-4 py-2" onClick={() => handleSort('status')}>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTasks.map((task) => (
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

      {/* Pagination */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TasksTable
