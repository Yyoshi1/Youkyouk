import React, { useState } from 'react'
import { HomeIcon, FolderIcon, ChartBarIcon, UsersIcon, BellIcon, CogIcon } from '@heroicons/react/24/outline'

interface MenuItem {
  title: string
  icon: JSX.Element
  subItems?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  { 
    title: 'Projects', icon: <FolderIcon className="w-5 h-5" />,
    subItems: [
      { title: 'Active Projects', icon: <FolderIcon className="w-4 h-4" /> },
      { title: 'Archived Projects', icon: <FolderIcon className="w-4 h-4" /> },
      { title: 'Templates', icon: <FolderIcon className="w-4 h-4" /> },
    ]
  },
  { title: 'Analytics', icon: <ChartBarIcon className="w-5 h-5" /> },
  { 
    title: 'Team', icon: <UsersIcon className="w-5 h-5" />,
    subItems: [
      { title: 'Members', icon: <UsersIcon className="w-4 h-4" /> },
      { title: 'Roles', icon: <UsersIcon className="w-4 h-4" /> },
    ]
  },
  { title: 'Notifications', icon: <BellIcon className="w-5 h-5" /> },
  { title: 'Settings', icon: <CogIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleSubMenu = (title: string) => {
    setOpenItems(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 min-h-screen p-4 border-r border-gray-200 dark:border-gray-700">
      <nav className="space-y-2">
        {menuItems.map(item => (
          <div key={item.title}>
            <button
              className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => item.subItems ? toggleSubMenu(item.title) : undefined}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </button>
            {item.subItems && openItems[item.title] && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map(sub => (
                  <button key={sub.title} className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
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
