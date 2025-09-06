import React, { useState, useContext } from 'react'
import { SunIcon, MoonIcon, BellIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { ThemeContext } from '../../contexts/ThemeContext'
import CommandMenu from '../shared/CommandMenu'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.key === 'e') {
      e.preventDefault()
      setIsCommandOpen(!isCommandOpen)
    }
  }

  return (
    <header
      className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Left section: Logo */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk</h1>
      </div>

      {/* Center section: Search */}
      <div className="flex-1 mx-4 relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 pl-10 pr-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
      </div>

      {/* Right section: Icons */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {theme === 'light' ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-300" />}
        </button>

        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 relative">
          <BellIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
          <UserCircleIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {isCommandOpen && <CommandMenu onClose={() => setIsCommandOpen(false)} />}
    </header>
  )
}

export default Header
