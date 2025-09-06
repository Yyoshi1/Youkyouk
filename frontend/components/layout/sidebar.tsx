// frontend/components/layout/Sidebar.tsx
import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  CalendarIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  LogoutIcon,
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
  { name: 'Team', icon: <UsersIcon className="w-5 h-5" /> },
  { name: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { name: 'Settings', icon: <CogIcon className="w-5 h-5" /> },
  { name: 'Logout', icon: <LogoutIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name)
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0">
      <div className="p-4 text-lg font-bold text-gray-900 dark:text-white">Youkyouk</div>
      <nav className="mt-5">
        {menuItems.map((item) => (
          <div key={item.name}>
            <button
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              onClick={() => item.subItems && toggleSubMenu(item.name)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </button>
            {item.subItems && openSubMenu === item.name && (
              <div className="ml-8 mt-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub.name}
                    className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    {sub.icon}
                    <span className="ml-3">{sub.name}</span>
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
