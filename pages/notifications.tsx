import React, { useEffect, useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import api from '../lib/api'

interface Notification {
  id: number
  message: string
  read: boolean
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await api.get('/notifications')
      setNotifications(response.data)
    }
    fetchNotifications()
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Notifications</h1>
          <ul className="space-y-2">
            {notifications.map((note) => (
              <li
                key={note.id}
                className={`p-4 rounded shadow ${note.read ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-100 dark:bg-blue-800'}`}
              >
                {note.message}
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}

export default NotificationsPage
