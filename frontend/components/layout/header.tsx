import React, { useState } from 'react'
import SearchModal from './SearchModal'

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow">
      <div className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk Dashboard</div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>
      <SearchModal />
    </header>
  )
}

export default Header
