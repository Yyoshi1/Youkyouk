import React, { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import DashboardCards from '../components/dashboard/DashboardCards'
import CommandPalette from '../components/layout/CommandPalette'
import CreateProjectModal from '../components/modals/CreateProjectModal'
import TasksTable from '../components/dashboard/TasksTable'

const DashboardPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
          <DashboardCards />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-white dark:bg-gray-800 rounded shadow flex items-center justify-center text-gray-400">
              Chart 1
            </div>
            <div className="h-64 bg-white dark:bg-gray-800 rounded shadow flex items-center justify-center text-gray-400">
              Chart 2
            </div>
          </div>

          {/* Tasks Table */}
          <TasksTable />

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            Open Create Project Modal
          </button>
        </main>
      </div>

      <CommandPalette />
      <CreateProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default DashboardPage
