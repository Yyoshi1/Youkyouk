import React, { useState } from 'react'

interface Notification {
  id: number
  title: string
  description: string
  read: boolean
}

const initialNotifications: Notification[] = [
  { id: 1, title: 'New Task Assigned', description: 'You have a new task in Project Alpha.', read: false },
  { id: 2, title: 'Project Deadline', description: 'Project Beta deadline is approaching.', read: false },
  { id: 3, title: 'Team Member Joined', description: 'Alice has joined Project Gamma.', read: true },
]

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [open, setOpen] = useState(false)

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 relative"
      >
        <span className="sr-only">Notifications</span>
        <div className="h-5 w-5 text-gray-600 dark:text-gray-300">
          🔔
        </div>
        {notifications.some((n) => !n.read) && (
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
          <div className="p-4 font-semibold border-b border-gray-200 dark:border-gray-700">
            Notifications
          </div>
          <ul className="max-h-64 overflow-y-auto">
            {notifications.map((n) => (
              <li
                key={n.id}
                className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer ${
                  !n.read ? 'bg-blue-50 dark:bg-gray-700' : ''
                }`}
                onClick={() => markAsRead(n.id)}
              >
                <h4 className="font-medium text-gray-800 dark:text-gray-200">{n.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{n.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Notifications
