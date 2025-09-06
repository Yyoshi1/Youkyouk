import React from 'react'
import { SearchIcon, BellIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="relative p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
