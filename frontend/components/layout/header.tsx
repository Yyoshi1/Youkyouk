import React, { useState } from 'react'
import { SunIcon, MoonIcon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  const toggleTheme = () => setDarkMode(!darkMode)

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400"/> : <MoonIcon className="w-6 h-6 text-gray-900"/>}
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <BellIcon className="w-6 h-6"/>
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <MagnifyingGlassIcon className="w-6 h-6"/>
        </button>
      </div>
    </header>
  )
}

export default Header
