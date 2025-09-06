import React, { useState } from 'react'
import { SunIcon, MoonIcon, BellIcon, SearchIcon } from '@heroicons/react/outline'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-800 dark:text-white" />}
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <SearchIcon className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>
    </header>
  )
}

export default Header
