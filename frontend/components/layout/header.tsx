import React, { useState, useEffect } from 'react'
import { BellIcon, SunIcon, MoonIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Ctrl+E opens search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'e') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
      {/* Left section: project title */}
      <div className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk</div>

      {/* Middle: search (Ctrl+E) */}
      <div className="relative">
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center border border-gray-300 dark:border-gray-600 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          <span className="ml-2 text-gray-500 dark:text-gray-400">Search...</span>
          <span className="ml-2 text-xs text-gray-400">(Ctrl+E)</span>
        </button>
        {searchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-96">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Type to search..."
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="mt-3 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right section: icons */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-600" />}
        </button>
        <button>
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        <button>
          <UserCircleIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </header>
  )
}

export default Header
