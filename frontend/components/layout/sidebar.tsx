import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  CalendarIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

interface MenuItem {
  title: string
  icon: React.ReactNode
  subItems?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  {
    title: 'Projects',
    icon: <FolderIcon className="w-5 h-5" />,
    subItems: [
      { title: 'All Projects', icon: <FolderIcon className="w-4 h-4" /> },
      { title: 'Active', icon: <FolderIcon className="w-4 h-4" /> },
      { title: 'Archived', icon: <FolderIcon className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Tasks',
    icon: <CalendarIcon className="w-5 h-5" />,
    subItems: [
      { title: 'Today', icon: <CalendarIcon className="w-4 h-4" /> },
      { title: 'Upcoming', icon: <CalendarIcon className="w-4 h-4" /> },
    ],
  },
  { title: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { title: 'Team', icon: <UsersIcon className="w-5 h-5" /> },
  { title: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleSubMenu = (title: string) => {
    setOpenMenu(openMenu === title ? null : title)
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 h-screen flex flex-col">
      <div className="px-6 py-4 font-bold text-xl text-gray-900 dark:text-white">
        Youkyouk
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map((item) => (
          <div key={item.title}>
            <button
              onClick={() => item.subItems && toggleSubMenu(item.title)}
              className="flex items-center w-full px-2 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </button>
            {item.subItems && openMenu === item.title && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub.title}
                    className="flex items-center w-full px-2 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                  >
                    {sub.icon}
                    <span className="ml-2">{sub.title}</span>
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
