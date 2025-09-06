// /pages/dashboard.tsx
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
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1 overflow-auto">
          <DashboardCards />
          <ChartsSection />
          <TasksTable />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardPage
