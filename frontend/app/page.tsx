import React from 'react'
import DashboardCards from '../components/dashboard/DashboardCards'
import ChartsSection from '../components/dashboard/ChartsSection'
import TasksTable from '../components/dashboard/TasksTable'

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Cards Section */}
      <DashboardCards />

      {/* Charts Section */}
      <ChartsSection />

      {/* Tasks Table */}
      <TasksTable />
    </div>
  )
}

export default DashboardPage
