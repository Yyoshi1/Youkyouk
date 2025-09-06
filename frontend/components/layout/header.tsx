import React, { useState, useEffect } from 'react'
import { SearchIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  // Ctrl+E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'e') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      {/* */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk Dashboard</h1>
      </div>

      {/* */}
      <div className="flex items-center space-x-4">
        {/* */}
        {searchOpen && (
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        )}

        {/* */}
        <button className="relative p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* */}
        <div className="relative">
          <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <img
              src="/avatar.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          {/* */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md z-50 hidden group-hover:block">
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
