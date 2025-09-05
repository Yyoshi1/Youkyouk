// /components/layout/Header.tsx
import { useTheme } from '../../context/ThemeContext'
import { BellIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
      {/* */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" /> : <MenuIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />}
      </button>

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Youkyouk</span>
      </div>

      {/*  */}
      <div className="flex items-center space-x-4">
        {/* */}
        <button className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <BellIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
          ) : (
            <SunIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
          )}
        </button>

        {/* */}
        <div className="relative">
          <button className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-800 dark:text-gray-100 font-bold">
            U
          </button>
          {/* */}
        </div>
      </div>
    </header>
  )
}

export default Header
