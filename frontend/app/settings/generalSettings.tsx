import React from 'react'

const GeneralSettings: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">General Settings</h2>
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Company Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter company name"
        />
      </div>
    </div>
  )
}

export default GeneralSettings
