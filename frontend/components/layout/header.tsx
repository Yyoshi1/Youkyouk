// frontend/components/layout/Header.tsx
import React, { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'e') {
      e.preventDefault()
      setSearchOpen(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-xl">Youkyouk</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
        <button
          onClick={() => setSearchOpen(true)}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <BellIcon className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Quick Search</span>
              <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
                ✕
              </button>
            </div>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              autoFocus
            />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Dashboard</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Projects</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Teams</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Calendar</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Reports</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Chat</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Settings</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
