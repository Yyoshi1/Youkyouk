import React, { useState } from 'react'
import { HomeIcon, FolderIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline'

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true)
  
  const toggleSidebar = () => setOpen(!open)

  return (
    <aside className={`bg-white dark:bg-gray-900 shadow h-screen transition-all duration-300 ${open ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="text-lg font-bold text-gray-900 dark:text-white">{open ? 'Youkyouk' : 'YK'}</span>
        <button onClick={toggleSidebar} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {open ? '<' : '>'}
        </button>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <HomeIcon className="w-6 h-6"/>
            {open && <span className="ml-3">Dashboard</span>}
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <FolderIcon className="w-6 h-6"/>
            {open && <span className="ml-3">Projects</span>}
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <ChartBarIcon className="w-6 h-6"/>
            {open && <span className="ml-3">Analytics</span>}
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <UsersIcon className="w-6 h-6"/>
            {open && <span className="ml-3">Team</span>}
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
