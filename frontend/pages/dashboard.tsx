import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import DashboardCards from '../components/dashboard/DashboardCards'
import SearchModal from '../components/layout/SearchModal'

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <DashboardCards />
        </main>
      </div>
      <SearchModal />
    </div>
  )
}

export default DashboardPage
