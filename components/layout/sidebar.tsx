// /components/layout/Sidebar.tsx
import React, { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  BellIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const sidebarLinks = [
  {
    name: 'Dashboard',
    icon: HomeIcon,
    href: '/dashboard',
  },
  {
    name: 'Projects',
    icon: FolderIcon,
    href: '/projects',
    subLinks: [
      { name: 'Active', href: '/projects/active' },
      { name: 'Archived', href: '/projects/archived' },
    ],
  },
  {
    name: 'Tasks',
    icon: ClipboardDocumentIcon,
    href: '/tasks',
  },
  {
    name: 'Users',
    icon: UserGroupIcon,
    href: '/users',
  },
  {
    name: 'Teams',
    icon: Squares2X2Icon,
    href: '/teams',
  },
  {
    name: 'Notifications',
    icon: BellIcon,
    href: '/notifications',
  },
  {
    name: 'Reports',
    icon: ChartBarIcon,
    href: '/reports',
  },
  {
    name: 'Settings',
    icon: Cog6ToothIcon,
    href: '/settings',
  },
]

const Sidebar: React.FC = () => {
  const [active, setActive] = useState('Dashboard')
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})

  const toggleSubMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex-shrink-0">
      <nav className="flex flex-col mt-4">
        {sidebarLinks.map((link) => (
          <div key={link.name}>
            <a
              href={link.href}
              onClick={() => {
                setActive(link.name)
                if (link.subLinks) toggleSubMenu(link.name)
              }}
              className={clsx(
                'flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition rounded-r',
                active === link.name ? 'bg-blue-500 text-white' : ''
              )}
            >
              <link.icon className="w-5 h-5 mr-3" />
              <span>{link.name}</span>
              {link.subLinks && (
                <span className="ml-auto">{openMenus[link.name] ? '▲' : '▼'}</span>
              )}
            </a>

            {link.subLinks && openMenus[link.name] && (
              <div className="ml-8 mt-1 flex flex-col">
                {link.subLinks.map((sub) => (
                  <a
                    key={sub.name}
                    href={sub.href}
                    onClick={() => setActive(sub.name)}
                    className={clsx(
                      'px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded',
                      active === sub.name ? 'bg-blue-400 text-white' : ''
                    )}
                  >
                    {sub.name}
                  </a>
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
