import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  CalendarIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  LogoutIcon,
} from '@heroicons/react/outline'

interface MenuItem {
  name: string
  icon: React.ElementType
  subItems?: MenuItem[]
}

const menu: MenuItem[] = [
  { name: 'Dashboard', icon: HomeIcon },
  { name: 'Projects', icon: FolderIcon },
  { name: 'Tasks', icon: CalendarIcon },
  { name: 'Team', icon: UsersIcon },
  { name: 'Reports', icon: ChartBarIcon },
  { name: 'Settings', icon: CogIcon },
  { name: 'Logout', icon: LogoutIcon },
]

const Sidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (name: string) => {
    setOpenSections({ ...openSections, [name]: !openSections[name] })
  }

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Youkyouk</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.name} className="mb-2">
            <button
              className="flex items-center w-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded"
              onClick={() => toggleSection(item.name)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </button>
            {item.subItems && openSections[item.name] && (
              <ul className="ml-6 mt-1">
                {item.subItems.map((sub) => (
                  <li key={sub.name} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    <sub.icon className="w-4 h-4 mr-2 inline-block" />
                    {sub.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
