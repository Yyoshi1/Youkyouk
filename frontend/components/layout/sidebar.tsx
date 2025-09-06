import React, { useState } from 'react'
import {
  HomeIcon,
  ClipboardListIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

interface MenuItem {
  title: string
  icon: React.ReactNode
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="h-5 w-5" /> },
  {
    title: 'Projects',
    icon: <ClipboardListIcon className="h-5 w-5" />,
    children: [
      { title: 'All Projects', icon: <ChartBarIcon className="h-4 w-4" /> },
      { title: 'Create Project', icon: <ChartBarIcon className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Team',
    icon: <UsersIcon className="h-5 w-5" />,
    children: [
      { title: 'All Members', icon: <ChartBarIcon className="h-4 w-4" /> },
      { title: 'Add Member', icon: <ChartBarIcon className="h-4 w-4" /> },
    ],
  },
  { title: 'Reports', icon: <ChartBarIcon className="h-5 w-5" /> },
  { title: 'Settings', icon: <Cog6ToothIcon className="h-5 w-5" /> },
]

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (title: string) => {
    if (openMenus.includes(title)) {
      setOpenMenus(openMenus.filter((t) => t !== title))
    } else {
      setOpenMenus([...openMenus, title])
    }
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 min-h-screen shadow">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Youkyouk</h1>
      </div>
      <nav className="px-2">
        {menuItems.map((item) => (
          <div key={item.title} className="mb-2">
            <button
              onClick={() => item.children && toggleMenu(item.title)}
              className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </button>
            {item.children && openMenus.includes(item.title) && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <button
                    key={child.title}
                    className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
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
