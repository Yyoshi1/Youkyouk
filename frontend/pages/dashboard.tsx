import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import DashboardCards from '../components/dashboard/DashboardCards'
import SearchModal from '../components/layout/SearchModal'
import Footer from '../components/layout/Footer'

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 flex-1">
            <DashboardCards />
          </main>
        </div>
      </div>
      <Footer />
      <SearchModal />
    </div>
  )
}

export default DashboardPage
