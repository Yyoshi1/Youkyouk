// /frontend/components/layout/Header.tsx
import React from 'react'
import { SunIcon, MoonIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import SearchModal from './SearchModal'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      {/* Logo or Title */}
      <div className="flex items-center space-x-4">
        <span className="font-bold text-xl text-gray-900 dark:text-gray-100">Youkyouk</span>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Dark/Light toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-900" />}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <BellIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
        </button>

        {/* Profile */}
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <UserCircleIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        </button>
      </div>

      {/* Search Modal */}
      <SearchModal />
    </header>
  )
}

export default Header
