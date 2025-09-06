import React, { useState } from 'react'
import { BellIcon, SunIcon, MoonIcon, UserCircleIcon, SearchIcon } from '@heroicons/react/outline'
import SearchModal from '../dashboard/SearchModal'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Search */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center px-3 py-2 border rounded text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <SearchIcon className="w-5 h-5 mr-2" />
          Search...
        </button>
        <SearchModal />
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />}
        </button>
        <button className="relative p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <BellIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <UserCircleIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
      </div>
    </header>
  )
}

export default Header
