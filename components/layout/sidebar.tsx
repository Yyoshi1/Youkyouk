// /components/layout/Sidebar.tsx
import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  BellIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const links = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Projects', icon: FolderIcon, href: '/projects' },
  { name: 'Tasks', icon: ClipboardDocumentIcon, href: '/tasks' },
  { name: 'Users', icon: UserGroupIcon, href: '/users' },
  { name: 'Notifications', icon: BellIcon, href: '/notifications' },
]

const Sidebar: React.FC = () => {
  const [active, setActive] = useState('Dashboard')
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex-shrink-0">
      <nav className="flex flex-col mt-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={clsx(
              'flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition rounded-r',
              active === link.name ? 'bg-blue-500 text-white' : ''
            )}
          >
            <link.icon className="w-5 h-5 mr-3" />
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
