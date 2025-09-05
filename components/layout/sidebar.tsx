import React from 'react'
import {
  HomeIcon,
  Squares2X2Icon,
  CalendarIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

interface SidebarItem {
  title: string
  icon: React.ReactNode
  path: string
}

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="h-6 w-6" />, path: '/dashboard' },
  { title: 'Projects', icon: <Squares2X2Icon className="h-6 w-6" />, path: '/projects' },
  { title: 'Calendar', icon: <CalendarIcon className="h-6 w-6" />, path: '/calendar' },
  { title: 'Tasks', icon: <ClipboardDocumentListIcon className="h-6 w-6" />, path: '/tasks' },
  { title: 'Teams', icon: <UsersIcon className="h-6 w-6" />, path: '/teams' },
  { title: 'Reports', icon: <ChartBarIcon className="h-6 w-6" />, path: '/reports' },
  { title: 'Notifications', icon: <BellIcon className="h-6 w-6" />, path: '/notifications' },
  { title: 'Settings', icon: <Cog6ToothIcon className="h-6 w-6" />, path: '/settings' },
]

const Sidebar: React.FC = () => {
  const router = useRouter()

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 min-h-screen border-r border-gray-200 dark:border-gray-700">
      <div className="p-4 text-xl font-bold text-gray-800 dark:text-white">Youkyouk</div>
      <nav className="mt-6">
        {sidebarItems.map((item) => {
          const active = router.pathname === item.path
          return (
            <div
              key={item.title}
              onClick={() => router.push(item.path)}
              className={`flex items-center space-x-3 px-4 py-3 cursor-pointer rounded-lg m-1 ${
                active ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
