import React, { useState } from 'react'
import { HomeIcon, FolderIcon, ClipboardListIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const Sidebar: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const toggleMenu = (key: string) => {
    setOpenKeys((prev) => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key])
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 min-h-screen shadow flex-shrink-0">
      <nav className="flex flex-col p-4 space-y-2">
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <HomeIcon className="w-6 h-6" />
          <span>Dashboard</span>
        </button>

        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded" onClick={() => toggleMenu('projects')}>
          <FolderIcon className="w-6 h-6" />
          <span>Projects</span>
        </button>

        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded" onClick={() => toggleMenu('tasks')}>
          <ClipboardListIcon className="w-6 h-6" />
          <span>Tasks</span>
        </button>

        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <UsersIcon className="w-6 h-6" />
          <span>Team</span>
        </button>

        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <Cog6ToothIcon className="w-6 h-6" />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
