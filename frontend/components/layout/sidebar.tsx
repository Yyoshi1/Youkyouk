import React, { useState } from 'react'
import {
  HomeIcon,
  ClipboardListIcon,
  UsersIcon,
  CalendarIcon,
  CogIcon,
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
    icon: <ClipboardListIcon className="w-5 h-5" />,
    subItems: [
      { title: 'Active Projects', icon: <ClipboardListIcon className="w-4 h-4" /> },
      { title: 'Archived Projects', icon: <ClipboardListIcon className="w-4 h-4" /> },
    ],
  },
  { title: 'Team', icon: <UsersIcon className="w-5 h-5" /> },
  { title: 'Calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  { title: 'Settings', icon: <CogIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  const handleSubMenu = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title)
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 min-h-screen p-4 border-r border-gray-200 dark:border-gray-700">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.title}>
            <button
              onClick={() => item.subItems && handleSubMenu(item.title)}
              className="flex items-center w-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
              {item.subItems && (
                <span className="ml-auto">{openSubMenu === item.title ? '−' : '+'}</span>
              )}
            </button>
            {item.subItems && openSubMenu === item.title && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub.title}
                    className="flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
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
