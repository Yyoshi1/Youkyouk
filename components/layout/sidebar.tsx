// /components/layout/Sidebar.tsx
import React from 'react'
import { HomeIcon, FolderIcon, CheckCircleIcon, UsersIcon, BellIcon, CogIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Projects', icon: FolderIcon },
    { name: 'Tasks', icon: CheckCircleIcon },
    { name: 'Team', icon: UsersIcon },
    { name: 'Notifications', icon: BellIcon },
    { name: 'Settings', icon: CogIcon },
    { name: 'Search', icon: MagnifyingGlassIcon },
  ]

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md min-h-screen">
      <div className="p-4 text-xl font-bold">Youkyouk</div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.name}
              className="flex items-center w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
