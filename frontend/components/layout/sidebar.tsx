// /components/layout/Sidebar.tsx
import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  UsersIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'

interface SidebarItem {
  title: string
  icon: React.ReactNode
  subItems?: { title: string }[]
}

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  {
    title: 'Projects',
    icon: <FolderIcon className="w-5 h-5" />,
    subItems: [
      { title: 'All Projects' },
      { title: 'Active Projects' },
      { title: 'Archived Projects' },
    ],
  },
  { title: 'Teams', icon: <UsersIcon className="w-5 h-5" /> },
  { title: 'Calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  { title: 'Reports', icon: <ChartBarIcon className="w-5 h-5" /> },
  { title: 'Chat', icon: <ChatBubbleLeftRightIcon className="w-5 h-5" /> },
  { title: 'Notifications', icon: <BellIcon className="w-5 h-5" /> },
  { title: 'Settings', icon: <CogIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({})

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-screen shadow-lg">
      <div className="p-4 font-bold text-xl border-b border-gray-200 dark:border-gray-700">
        Youkyouk
      </div>
      <nav className="p-2">
        {sidebarItems.map((item) => (
          <div key={item.title}>
            <button
              onClick={() => item.subItems && toggleSubMenu(item.title)}
              className="flex items-center w-full p-2 text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {item.icon}
              <span className="ml-3 flex-1">{item.title}</span>
              {item.subItems &&
                (openSubMenus[item.title] ? (
                  <ChevronUpIcon className="w-4 h-4" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4" />
                ))}
            </button>
            {item.subItems && openSubMenus[item.title] && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub.title}
                    className="flex items-center w-full p-2 text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none text-sm"
                  >
                    {sub.title}
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
