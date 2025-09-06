// /frontend/components/layout/Sidebar.tsx
import React, { useState } from 'react'
import { 
  HomeIcon, 
  FolderIcon, 
  CalendarIcon, 
  UsersIcon, 
  ChartBarIcon, 
  CogIcon, 
  ChevronDownIcon 
} from '@heroicons/react/24/outline'

interface MenuItem {
  title: string
  icon: React.ReactNode
  subItems?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5"/> },
  { 
    title: 'Projects', 
    icon: <FolderIcon className="w-5 h-5"/>,
    subItems: [
      { title: 'Active Projects', icon: <FolderIcon className="w-4 h-4"/> },
      { title: 'Archived Projects', icon: <FolderIcon className="w-4 h-4"/> },
    ]
  },
  { title: 'Tasks', icon: <CalendarIcon className="w-5 h-5"/> },
  { title: 'Team', icon: <UsersIcon className="w-5 h-5"/> },
  { title: 'Reports', icon: <ChartBarIcon className="w-5 h-5"/> },
  { 
    title: 'Settings', 
    icon: <CogIcon className="w-5 h-5"/>,
    subItems: [
      { title: 'Profile', icon: <CogIcon className="w-4 h-4"/> },
      { title: 'Preferences', icon: <CogIcon className="w-4 h-4"/> },
    ]
  },
]

const Sidebar: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleSubmenu = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg flex flex-col">
      <div className="p-4 font-bold text-xl border-b border-gray-200 dark:border-gray-700">
        Youkyouk
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <button
              onClick={() => item.subItems && toggleSubmenu(idx)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.subItems && <ChevronDownIcon className={`w-4 h-4 transform ${openIndexes.includes(idx) ? 'rotate-180' : ''}`} />}
            </button>
            {item.subItems && openIndexes.includes(idx) && (
              <div className="pl-10 flex flex-col">
                {item.subItems.map((sub, sidx) => (
                  <button key={sidx} className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-600">
                    {sub.icon}
                    <span>{sub.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
