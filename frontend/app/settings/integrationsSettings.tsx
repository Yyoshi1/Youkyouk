import React from 'react'

const IntegrationsSettings: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Integrations</h2>
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <p className="text-gray-700 dark:text-gray-300">Connect third-party apps and services.</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Manage Integrations</button>
      </div>
    </div>
  )
}

export default IntegrationsSettings
