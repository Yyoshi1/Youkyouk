import React, { useState } from 'react'
import {
  HomeIcon,
  ClipboardListIcon,
  UsersIcon,
  ChartBarIcon,
  BellIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

interface SidebarItem {
  name: string
  icon: React.ReactNode
  subItems?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  {
    name: 'Projects',
    icon: <ClipboardListIcon className="w-5 h-5" />,
    subItems: [
      { name: 'Active Projects', icon: <ClipboardListIcon className="w-4 h-4" /> },
      { name: 'Archived Projects', icon: <ClipboardListIcon className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Team',
    icon: <UsersIcon className="w-5 h-5" />,
    subItems: [
      { name: 'Members', icon: <UsersIcon className="w-4 h-4" /> },
      { name: 'Roles', icon: <CogIcon className="w-4 h-4" /> },
    ],
  },
  { name: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { name: 'Notifications', icon: <BellIcon className="w-5 h-5" /> },
  { name: 'Settings', icon: <CogIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 min-h-screen p-4">
      <div className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">Youkyouk</div>
      <ul className="space-y-2">
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => item.subItems && toggleItem(item.name)}
              className="flex items-center w-full p-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
              {item.subItems && (
                <span className="ml-auto">{openItems[item.name] ? '-' : '+'}</span>
              )}
            </button>
            {item.subItems && openItems[item.name] && (
              <ul className="ml-6 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <li key={sub.name} className="flex items-center p-1 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    {sub.icon}
                    <span className="ml-2">{sub.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
