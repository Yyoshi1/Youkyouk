import React, { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, BellIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'e') {
      e.preventDefault()
      setSearchOpen((prev) => !prev)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      {/* Left: Page title or breadcrumb */}
      <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">Dashboard</div>

      {/* Center: Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <div className="flex items-center space-x-2 mb-4">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                autoFocus
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Projects</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Tasks</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Team</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Reports</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Notifications</button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded">Settings</button>
            </div>
          </div>
        </div>
      )}

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-700" />}
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <BellIcon className="w-5 h-5" />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <UserCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}

export default Header
