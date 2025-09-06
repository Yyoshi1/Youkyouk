import React, { useState } from 'react'
import {
  HomeIcon,
  ClipboardListIcon,
  UsersIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
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
    name: 'Projects', icon: <ClipboardListIcon className="w-5 h-5" />,
    subItems: [
      { name: 'All Projects', icon: <ClipboardListIcon className="w-4 h-4" /> },
      { name: 'Archived', icon: <ClipboardListIcon className="w-4 h-4" /> },
    ]
  },
  { name: 'Team', icon: <UsersIcon className="w-5 h-5" /> },
  { name: 'Calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  { name: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { name: 'Settings', icon: <CogIcon className="w-5 h-5" /> },
  { name: 'Help Center', icon: <QuestionMarkCircleIcon className="w-5 h-5" /> },
  { name: 'Logout', icon: <LogoutIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (name: string) => {
    setOpenItems(prev => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0">
      <div className="p-4 text-xl font-bold text-gray-900 dark:text-white">
        Youkyouk
      </div>
      <nav className="mt-4">
        {menuItems.map(item => (
          <div key={item.name}>
            <button
              onClick={() => item.subItems ? toggleItem(item.name) : undefined}
              className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </button>
            {item.subItems && openItems[item.name] && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map(sub => (
                  <button
                    key={sub.name}
                    className="flex items-center w-full px-4 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
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
    </div>
  )
}

export default Sidebar
