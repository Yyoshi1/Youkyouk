import React from 'react'
import { HomeIcon, ClipboardListIcon, UsersIcon, CalendarIcon, ChartBarIcon, CogIcon, BellIcon } from '@heroicons/react/outline'

interface SidebarItem {
  name: string
  icon: React.ElementType
  href: string
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Projects', icon: ClipboardListIcon, href: '/projects' },
  { name: 'Tasks', icon: ClipboardListIcon, href: '/tasks' },
  { name: 'Teams', icon: UsersIcon, href: '/teams' },
  { name: 'Calendar', icon: CalendarIcon, href: '/calendar' },
  { name: 'Reports', icon: ChartBarIcon, href: '/reports' },
  { name: 'Notifications', icon: BellIcon, href: '/notifications' },
  { name: 'Settings', icon: CogIcon, href: '/settings' },
]

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 text-xl font-bold text-gray-800 dark:text-white">Youkyouk</div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {sidebarItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
