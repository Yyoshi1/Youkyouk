import React from 'react'

const ChartsSection: React.FC = () => {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-gray-900 dark:text-white font-bold mb-2">Project Overview</h3>
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-gray-900 dark:text-white font-bold mb-2">Team Performance</h3>
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </section>
  )
}

export default ChartsSection
