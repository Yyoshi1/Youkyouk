// /components/layout/Sidebar/Sidebar.tsx
import React, { useState } from 'react'
import {
  HomeIcon,
  InboxIcon,
  UsersIcon,
  CalendarIcon,
  CogIcon,
  BellIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

interface MenuItem {
  title: string
  icon: React.ReactNode
  submenu?: MenuItem[]
}

const menu: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="h-5 w-5" /> },
  { title: 'Inbox', icon: <InboxIcon className="h-5 w-5" /> },
  { title: 'Team', icon: <UsersIcon className="h-5 w-5" /> },
  {
    title: 'Projects',
    icon: <CalendarIcon className="h-5 w-5" />,
    submenu: [
      { title: 'Active Projects', icon: <PlusIcon className="h-4 w-4" /> },
      { title: 'Archived', icon: <PlusIcon className="h-4 w-4" /> },
    ],
  },
  { title: 'Settings', icon: <CogIcon className="h-5 w-5" /> },
  { title: 'Notifications', icon: <BellIcon className="h-5 w-5" /> },
]

const Sidebar: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-screen shadow-md">
      <div className="p-4 font-bold text-xl text-gray-900 dark:text-white">Youkyouk</div>
      <ul>
        {menu.map((item) => (
          <li key={item.title}>
            <button
              onClick={() => item.submenu && toggleSubmenu(item.title)}
              className="flex items-center w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
              {item.submenu && (
                <span className="ml-auto">{openSubmenu === item.title ? '▾' : '▸'}</span>
              )}
            </button>
            {item.submenu && openSubmenu === item.title && (
              <ul className="pl-8">
                {item.submenu.map((sub) => (
                  <li key={sub.title} className="py-1 flex items-center">
                    {sub.icon}
                    <span className="ml-2">{sub.title}</span>
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
