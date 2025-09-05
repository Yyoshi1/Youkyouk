// /components/layout/Header.tsx
import React, { useState } from 'react'
import { MagnifyingGlassIcon, SunIcon, MoonIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      {/* Search / Command Palette */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search (Ctrl + E)"
            className="pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />}
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <BellIcon className="w-5 h-5" />
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <UserCircleIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Header
