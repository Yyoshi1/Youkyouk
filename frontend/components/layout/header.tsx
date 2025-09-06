// frontend/components/layout/Header.tsx
import React, { useState } from 'react'
import { SunIcon, MoonIcon, BellIcon, UserCircleIcon, SearchIcon } from '@heroicons/react/outline'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <SearchIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          )}
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 relative">
          <BellIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
          <UserCircleIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          <span className="text-gray-900 dark:text-white">Admin</span>
        </div>
      </div>
    </header>
  )
}

export default Header
