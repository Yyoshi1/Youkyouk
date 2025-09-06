import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  ClipboardListIcon,
  UsersIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/outline'

interface MenuItem {
  name: string
  icon: React.ReactNode
  subItems?: MenuItem[]
}

const menu: MenuItem[] = [
  { name: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  { name: 'Projects', icon: <FolderIcon className="w-5 h-5" /> },
  { name: 'Tasks', icon: <ClipboardListIcon className="w-5 h-5" /> },
  { name: 'Team', icon: <UsersIcon className="w-5 h-5" /> },
  { name: 'Calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  { name: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { name: 'Settings', icon: <CogIcon className="w-5 h-5" />, subItems: [
      { name: 'Profile', icon: <CogIcon className="w-4 h-4" /> },
      { name: 'Preferences', icon: <CogIcon className="w-4 h-4" /> },
    ]
  },
]

const Sidebar: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4">
      <div className="text-xl font-bold mb-6">Youkyouk</div>
      <nav className="space-y-2">
        {menu.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => setOpenSubMenu(openSubMenu === item.name ? null : item.name)}
              className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </button>
            {item.subItems && openSubMenu === item.name && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <button key={sub.name} className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
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
