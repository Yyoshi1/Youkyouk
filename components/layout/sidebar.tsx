import React from 'react'
import {
  HomeIcon,
  FolderIcon,
  ClipboardDocumentIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
} from '@heroicons/react/24/outline'

interface SidebarItem {
  name: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  children?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  { name: 'Home', icon: HomeIcon },
  {
    name: 'Projects',
    icon: FolderIcon,
    children: [
      { name: 'All Projects', icon: FolderIcon },
      { name: 'Active', icon: FolderIcon },
      { name: 'Archived', icon: FolderIcon },
    ],
  },
  {
    name: 'Tasks',
    icon: ClipboardDocumentIcon,
    children: [
      { name: 'My Tasks', icon: ClipboardDocumentIcon },
      { name: 'Today', icon: ClipboardDocumentIcon },
      { name: 'Upcoming', icon: ClipboardDocumentIcon },
    ],
  },
  { name: 'Team', icon: UsersIcon },
  { name: 'Reports', icon: ChartBarIcon },
  { name: 'Notifications', icon: BellIcon },
  { name: 'Settings', icon: Cog6ToothIcon },
]

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4">
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <button className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <item.icon className="w-5 h-5 mr-2" />
              <span className="text-gray-900 dark:text-gray-100 font-medium">{item.name}</span>
            </button>
            {item.children && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <button
                    key={child.name}
                    className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300"
                  >
                    <child.icon className="w-4 h-4 mr-2" />
                    <span>{child.name}</span>
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
