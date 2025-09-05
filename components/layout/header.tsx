import React, { useEffect } from 'react'
import { BellIcon, MoonIcon, SunIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  // Shortcut Ctrl+E to open search
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
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      {/* Left: Search */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
        {searchOpen && (
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded focus:outline-none focus:ring w-64 dark:bg-gray-700 dark:text-white"
          />
        )}
      </div>

      {/* Right: Notifications & User */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 relative">
          <BellIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />}
        </button>

        {/* User Menu */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-gray-700 dark:text-gray-200 font-medium">John Doe</span>
        </div>
      </div>
    </header>
  )
}

export default Header
