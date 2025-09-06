import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  CalendarIcon,
  UsersIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline'

interface SidebarItem {
  title: string
  icon: JSX.Element
  subItems?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  {
    title: 'Projects',
    icon: <FolderIcon className="w-5 h-5" />,
    subItems: [
      { title: 'Active Projects', icon: <FolderIcon className="w-4 h-4" /> },
      { title: 'Archived Projects', icon: <FolderIcon className="w-4 h-4" /> },
    ],
  },
  { title: 'Calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  {
    title: 'Team',
    icon: <UsersIcon className="w-5 h-5" />,
    subItems: [
      { title: 'Members', icon: <UsersIcon className="w-4 h-4" /> },
      { title: 'Roles', icon: <Cog6ToothIcon className="w-4 h-4" /> },
    ],
  },
  { title: 'Analytics', icon: <ChartBarIcon className="w-5 h-5" /> },
  { title: 'Messages', icon: <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> },
  { title: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <div className="p-4 font-bold text-xl text-gray-800 dark:text-gray-200">Youkyouk</div>
      <nav className="mt-6">
        {sidebarItems.map((item) => (
          <div key={item.title}>
            <button
              onClick={() => item.subItems && toggleSection(item.title)}
              className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </button>
            {item.subItems && openSections[item.title] && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub.title}
                    className="flex items-center w-full px-4 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
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
