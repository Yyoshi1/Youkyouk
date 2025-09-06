import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1 overflow-auto">
          {/* Dashboard content: charts, tables, cards */}
          {/* يمكن إضافة أي محتوى إضافي مطابق للينيار هنا */}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardPage
