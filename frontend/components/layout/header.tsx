import React, { useState } from 'react'
import { SunIcon, MoonIcon, BellIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import SearchModal from './SearchModal'

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
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={toggleDarkMode}
        >
          {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-700" />}
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-300 text-sm hidden sm:inline">Search (Ctrl+E)</span>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 relative">
          <BellIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <UserCircleIcon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
          <span className="text-gray-700 dark:text-gray-300 hidden sm:inline">John Doe</span>
        </button>
      </div>
      <SearchModal />
    </header>
  )
}

export default Header
