// /frontend/components/layout/Sidebar.tsx
import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

interface MenuItem {
  title: string
  icon: React.ReactNode
  children?: MenuItem[]
}

const menu: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  {
    title: 'Projects',
    icon: <FolderIcon className="w-5 h-5" />,
    children: [
      { title: 'Active Projects', icon: <FolderIcon className="w-4 h-4" /> },
      { title: 'Archived Projects', icon: <FolderIcon className="w-4 h-4" /> },
    ],
  },
  { title: 'Analytics', icon: <ChartBarIcon className="w-5 h-5" /> },
  {
    title: 'Team',
    icon: <UsersIcon className="w-5 h-5" />,
    children: [
      { title: 'Members', icon: <UsersIcon className="w-4 h-4" /> },
      { title: 'Roles', icon: <Cog6ToothIcon className="w-4 h-4" /> },
    ],
  },
  { title: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen p-4 overflow-y-auto">
      <nav className="space-y-2">
        {menu.map((item) => (
          <div key={item.title}>
            <button
              className="flex items-center w-full p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              onClick={() => item.children && toggleItem(item.title)}
            >
              {item.icon}
              <span className="ml-3 flex-1 text-left">{item.title}</span>
              {item.children &&
                (openItems[item.title] ? (
                  <ChevronDownIcon className="w-4 h-4" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4" />
                ))}
            </button>
            {item.children && openItems[item.title] && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <button
                    key={child.title}
                    className="flex items-center w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                  >
                    {child.icon}
                    <span className="ml-2">{child.title}</span>
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
