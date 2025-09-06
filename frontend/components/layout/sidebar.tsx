import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  CalendarIcon,
  UsersIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

interface MenuItem {
  title: string
  icon: React.ReactNode
  subItems?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
  { title: 'Projects', icon: <FolderIcon className="w-5 h-5" />, subItems: [
    { title: 'Active Projects', icon: <ChevronRightIcon className="w-4 h-4" /> },
    { title: 'Archived Projects', icon: <ChevronRightIcon className="w-4 h-4" /> },
  ]},
  { title: 'Calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  { title: 'Team', icon: <UsersIcon className="w-5 h-5" />, subItems: [
    { title: 'Members', icon: <ChevronRightIcon className="w-4 h-4" /> },
    { title: 'Roles', icon: <ChevronRightIcon className="w-4 h-4" /> },
  ]},
  { title: 'Messages', icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5" /> },
  { title: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
]

const Sidebar: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleSubmenu = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4">
      <div className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Youkyouk</div>
      <nav>
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx} className="mb-1">
              <button
                className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
                onClick={() => item.subItems && toggleSubmenu(idx)}
              >
                {item.icon}
                <span className="ml-3 flex-1 text-left">{item.title}</span>
                {item.subItems &&
                  (openIndexes.includes(idx) ? (
                    <ChevronDownIcon className="w-4 h-4" />
                  ) : (
                    <ChevronRightIcon className="w-4 h-4" />
                  ))}
              </button>
              {item.subItems && openIndexes.includes(idx) && (
                <ul className="ml-6 mt-1">
                  {item.subItems.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <button className="flex items-center w-full p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
                        {sub.icon}
                        <span className="ml-2">{sub.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
