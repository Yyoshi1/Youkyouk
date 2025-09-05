import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import DashboardCards from '../components/dashboard/DashboardCards'
import TasksTable from '../components/dashboard/TasksTable'

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
          {/* Dashboard Cards */}
          <DashboardCards />

          {/* Tasks Table */}
          <TasksTable />

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded shadow p-4 h-64 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-300">Chart Placeholder 1</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-4 h-64 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-300">Chart Placeholder 2</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardPage
