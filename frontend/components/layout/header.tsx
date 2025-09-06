import React, { useState } from 'react'
import { SunIcon, MoonIcon, BellIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'e') {
      e.preventDefault()
      setSearchOpen(!searchOpen)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [searchOpen])

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl text-gray-800 dark:text-white">Youkyouk</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Search Button */}
        <button
          onClick={() => setSearchOpen(true)}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Dark/Light Mode */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 relative">
          <BellIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <img
            src="/profile.jpg"
            alt="User"
            className="h-6 w-6 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-96 p-4 shadow-lg relative">
            <button
              className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setSearchOpen(false)}
            >
              <XMarkIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring"
            />
            {/* ا*/}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Projects</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Tasks</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Teams</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Settings</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Dashboard</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Users</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Reports</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Notifications</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
