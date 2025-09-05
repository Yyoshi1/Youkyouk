import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'

const NotificationsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-300">Here will be Notifications list for the user.</p>
        </main>
      </div>
    </div>
  )
}

export default NotificationsPage
