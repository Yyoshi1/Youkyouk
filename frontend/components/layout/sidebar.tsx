import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/outline'

interface MenuItem {
  name: string
  icon: React.ReactNode
  subItems?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  {
    name: 'Projects',
    icon: <FolderIcon className="w-5 h-5" />,
    subItems: [
      { name: 'All Projects', icon: <FolderIcon className="w-4 h-4" /> },
      { name: 'Active', icon: <FolderIcon className="w-4 h-4" /> },
      { name: 'Archived', icon: <FolderIcon className="w-4 h-4" /> },
    ],
  },
  { name: 'Tasks', icon: <CalendarIcon className="w-5 h-5" /> },
  { name: 'Team', icon: <UserGroupIcon className="w-5 h-5" /> },
  { name: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { name: 'Settings', icon: <CogIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({})

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => item.subItems && toggleSubmenu(item.name)}
              className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </button>
            {item.subItems && openSubmenus[item.name] && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub.name}
                    className="flex items-center w-full p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    {sub.icon}
                    <span className="ml-2">{sub.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
