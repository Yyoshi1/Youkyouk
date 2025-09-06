import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

interface SidebarItem {
  title: string
  icon: React.ReactNode
  subItems?: { title: string }[]
}

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="h-5 w-5" /> },
  {
    title: 'Projects',
    icon: <FolderIcon className="h-5 w-5" />,
    subItems: [
      { title: 'Active Projects' },
      { title: 'Archived Projects' },
      { title: 'Templates' },
    ],
  },
  {
    title: 'Team',
    icon: <UsersIcon className="h-5 w-5" />,
    subItems: [
      { title: 'Members' },
      { title: 'Roles' },
      { title: 'Permissions' },
    ],
  },
  {
    title: 'Reports',
    icon: <ChartBarIcon className="h-5 w-5" />,
    subItems: [
      { title: 'Monthly' },
      { title: 'Quarterly' },
      { title: 'Annual' },
    ],
  },
  { title: 'Settings', icon: <CogIcon className="h-5 w-5" /> },
]

const Sidebar: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 min-h-screen p-4">
      <nav className="space-y-2">
        {sidebarItems.map((item, index) => (
          <div key={item.title}>
            <button
              onClick={() => toggleSubmenu(index)}
              className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </button>
            {item.subItems && openIndex === index && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <div
                    key={sub.title}
                    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    {sub.title}
                  </div>
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
