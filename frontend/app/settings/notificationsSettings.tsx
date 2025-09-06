import React from 'react'

const NotificationsSettings: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications Settings</h2>
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-indigo-600" />
          <span className="text-gray-700 dark:text-gray-300">Email notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-indigo-600" />
          <span className="text-gray-700 dark:text-gray-300">Push notifications</span>
        </label>
      </div>
    </div>
  )
}

export default NotificationsSettings
