// /components/layout/Sidebar.tsx
import React, { useState } from 'react'
import { HomeIcon, FolderIcon, BellIcon, UsersIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'

interface MenuItem {
  title: string
  icon: React.ReactNode
  path?: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
  {
    title: 'Projects',
    icon: <FolderIcon className="w-5 h-5" />,
    children: [
      { title: 'All Projects', icon: <FolderIcon className="w-5 h-5" />, path: '/projects' },
      { title: 'Create Project', icon: <FolderIcon className="w-5 h-5" />, path: '/projects/create' },
    ],
  },
  { title: 'Tasks', icon: <BellIcon className="w-5 h-5" />, path: '/tasks' },
  { title: 'Users', icon: <UsersIcon className="w-5 h-5" />, path: '/users' },
]

const Sidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 h-screen shadow-md p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleSection(item.title)}
                  className="flex items-center w-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition"
                >
                  {item.icon}
                  <span className="ml-2 flex-1 text-left">{item.title}</span>
                  {openSections[item.title] ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
                {openSections[item.title] &&
                  item.children.map((child) => (
                    <Link key={child.title} href={child.path || '#'}>
                      <a className="flex items-center ml-6 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
                        {child.icon}
                        <span className="ml-2">{child.title}</span>
                      </a>
                    ))}
              </>
            ) : (
              <Link href={item.path || '#'}>
                <a className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </a>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
