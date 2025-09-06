import React, { useState } from 'react'
import { SearchModal } from './SearchModal'
import { BellIcon, UserCircleIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)
  const toggleSearch = () => setShowSearch(!showSearch)

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow">
      <div className="flex items-center space-x-4">
        <button onClick={toggleSearch} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme}>
          {isDark ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
        </button>
        <button className="relative">
          <BellIcon className="w-6 h-6 text-gray-800 dark:text-white" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
        </button>
        <UserCircleIcon className="w-8 h-8 text-gray-800 dark:text-white" />
      </div>

      {showSearch && <SearchModal onClose={toggleSearch} />}
    </header>
  )
}

export default Header
