// frontend/components/layout/Sidebar.tsx
import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  UsersIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'

interface SidebarItem {
  title: string
  icon: React.ReactNode
  children?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  {
    title: 'Projects',
    icon: <FolderIcon className="w-5 h-5" />,
    children: [
      { title: 'Active Projects', icon: <FolderIcon className="w-5 h-5" /> },
      { title: 'Archived Projects', icon: <FolderIcon className="w-5 h-5" /> },
    ],
  },
  { title: 'Teams', icon: <UsersIcon className="w-5 h-5" /> },
  { title: 'Calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  { title: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { title: 'Chat', icon: <ChatBubbleLeftRightIcon className="w-5 h-5" /> },
  { title: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4">
      <div className="flex flex-col space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.title}>
            <button
              onClick={() => item.children && toggleMenu(item.title)}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.children &&
                (openMenus[item.title] ? (
                  <ChevronUpIcon className="w-4 h-4" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4" />
                ))}
            </button>
            {item.children && openMenus[item.title] && (
              <div className="ml-6 flex flex-col space-y-1 mt-1">
                {item.children.map((sub) => (
                  <button
                    key={sub.title}
                    className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                  >
                    {sub.icon}
                    <span>{sub.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
