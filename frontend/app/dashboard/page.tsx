import React from 'react'
import DashboardCards from './components/DashboardCards'
import TaskTable from './components/TaskTable'

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <DashboardCards />
      <TaskTable />
    </div>
  )
}

export default DashboardPage
