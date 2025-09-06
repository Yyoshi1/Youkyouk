// frontend/pages/dashboard.tsx
import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import DashboardCards from '../components/dashboard/DashboardCards'
import ChartsSection from '../components/dashboard/ChartsSection'
import TasksTable from '../components/dashboard/TasksTable'

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Dashboard sections */}
        <main className="flex-1 overflow-auto p-6 space-y-6">
          {/* Cards Section */}
          <DashboardCards />

          {/* Charts Section */}
          <ChartsSection />

          {/* Tasks Table Section */}
          <TasksTable />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default DashboardPage
