import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import DashboardCards from '../components/dashboard/DashboardCards'

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
          {/* Dashboard Cards */}
          <DashboardCards />

          {/* Charts placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-white dark:bg-gray-800 rounded shadow flex items-center justify-center text-gray-400">
              Chart 1
            </div>
            <div className="h-64 bg-white dark:bg-gray-800 rounded shadow flex items-center justify-center text-gray-400">
              Chart 2
            </div>
          </div>

          {/* Tables placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 text-gray-400">
            Tasks / Table placeholder
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardPage
