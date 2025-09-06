import React, { useState } from 'react'
import SearchModal from './SearchModal'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Youkyouk Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* SearchModal */}
      <SearchModal />
    </header>
  )
}

export default Header
