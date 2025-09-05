// /pages/dashboard.tsx
import React from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import Card from '../components/ui/Card'
import CommandPalette from '../components/ui/CommandPalette'

const sampleResults = [
  { id: '1', type: 'Project', title: 'Redesign Website', link: '/projects/1' },
  { id: '2', type: 'Task', title: 'Fix Login Bug', link: '/tasks/2' },
  { id: '3', type: 'User', title: 'John Doe', link: '/users/3' },
  { id: '4', type: 'Notification', title: 'New Comment', link: '/notifications/4' },
]

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card title="Projects" value="12" />
            <Card title="Tasks" value="34" />
            <Card title="Users" value="8" />
            <Card title="Notifications" value="5" />
          </div>

          {/* Additional sections can go here */}
        </main>

        <Footer />
      </div>

      {/* Global Search / Command Palette */}
      <CommandPalette results={sampleResults} />
    </div>
  )
}

export default Dashboard
