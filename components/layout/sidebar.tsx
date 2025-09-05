// /components/layout/Sidebar.tsx
import { useState } from 'react'
import {
  HomeIcon,
  FolderIcon,
  UsersIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Projects', icon: FolderIcon },
    { name: 'Team', icon: UsersIcon },
    { name: 'Calendar', icon: CalendarIcon },
    { name: 'Settings', icon: Cog6ToothIcon },
  ]

  return (
    <aside
      className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Toggle button */}
        <button
          className="p-2 m-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? '→' : '←'}
        </button>

        {/* Menu items */}
        <nav className="flex-1 mt-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center p-2 mx-2 my-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <item.icon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
              {!collapsed && <span className="ml-3 text-gray-900 dark:text-gray-100">{item.name}</span>}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
