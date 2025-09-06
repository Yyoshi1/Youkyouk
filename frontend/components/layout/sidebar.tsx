import React, { useState } from 'react'
import { HomeIcon, UsersIcon, FolderIcon, ChartBarIcon, Cog6ToothIcon, BellIcon } from '@heroicons/react/24/outline'

interface SidebarItem {
  title: string
  icon: React.ReactNode
  subItems?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    title: 'Projects',
    icon: <FolderIcon className="h-5 w-5" />,
    subItems: [
      { title: 'Active Projects', icon: <FolderIcon className="h-4 w-4" /> },
      { title: 'Archived Projects', icon: <FolderIcon className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Team',
    icon: <UsersIcon className="h-5 w-5" />,
    subItems: [
      { title: 'Members', icon: <UsersIcon className="h-4 w-4" /> },
      { title: 'Roles & Permissions', icon: <Cog6ToothIcon className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Reports',
    icon: <ChartBarIcon className="h-5 w-5" />,
    subItems: [
      { title: 'Daily', icon: <ChartBarIcon className="h-4 w-4" /> },
      { title: 'Monthly', icon: <ChartBarIcon className="h-4 w-4" /> },
      { title: 'Annual', icon: <ChartBarIcon className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Notifications',
    icon: <BellIcon className="h-5 w-5" />,
  },
  {
    title: 'Settings',
    icon: <Cog6ToothIcon className="h-5 w-5" />,
    subItems: [
      { title: 'Profile', icon: <Cog6ToothIcon className="h-4 w-4" /> },
      { title: 'Preferences', icon: <Cog6ToothIcon className="h-4 w-4" /> },
    ],
  },
]

const Sidebar: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md min-h-screen">
      <div className="p-4 font-bold text-lg text-gray-900 dark:text-white">Youkyouk</div>
      <nav className="mt-4">
        {sidebarItems.map((item) => (
          <div key={item.title}>
            <button
              className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              onClick={() => item.subItems && toggleItem(item.title)}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </button>
            {item.subItems && openItems.includes(item.title) && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub.title}
                    className="flex items-center w-full px-4 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
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
