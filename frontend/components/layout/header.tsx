import React from 'react'
import { SunIcon, MoonIcon, BellIcon, UserCircleIcon } from '@heroicons/react/outline'
import SearchModal from '../search/SearchModal'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <SearchModal />
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />}
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <BellIcon className="w-5 h-5" />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <UserCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}

export default Header
