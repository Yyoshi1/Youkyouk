// frontend/components/layout/Header.tsx
import React from 'react'
import ThemeToggle from '../ui/ThemeToggle'
import QuickSearchModal from '../dashboard/QuickSearchModal'
import { SearchIcon, BellIcon } from '../ui/Icons'

const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'e') setSearchOpen(true)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center space-x-4">
        <button onClick={() => setSearchOpen(true)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <SearchIcon />
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Youkyouk Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <BellIcon />
        </button>
      </div>
      {searchOpen && <QuickSearchModal onClose={() => setSearchOpen(false)} />}
    </header>
  )
}

export default Header

// frontend/components/layout/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-white dark:bg-gray-800 shadow text-center text-gray-600 dark:text-gray-300">
      © 2025 Youkyouk. All Rights Reserved.
    </footer>
  )
}

export default Footer

// frontend/components/layout/Sidebar.tsx
import React from 'react'
import { HomeIcon, ProjectIcon, TaskIcon, TeamIcon, CalendarIcon, SettingsIcon } from '../ui/Icons'

const sections = [
  { name: 'Home', icon: <HomeIcon /> },
  { name: 'Projects', icon: <ProjectIcon /> },
  { name: 'Tasks', icon: <TaskIcon /> },
  { name: 'Team', icon: <TeamIcon /> },
  { name: 'Calendar', icon: <CalendarIcon /> },
  { name: 'Settings', icon: <SettingsIcon /> },
]

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 shadow flex flex-col">
      <div className="p-4 font-bold text-lg text-gray-900 dark:text-white">Youkyouk</div>
      <nav className="flex-1">
        {sections.map((section) => (
          <div key={section.name} className="flex items-center p-4 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <span className="mr-3">{section.icon}</span>
            {section.name}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

// frontend/components/dashboard/DashboardCards.tsx
import React from 'react'

interface CardProps {
  title: string
  value: number
  color?: string
}

const cards = [
  { title: 'Active Projects', value: 12, color: 'bg-blue-500' },
  { title: 'Tasks Today', value: 34, color: 'bg-green-500' },
  { title: 'Team Members', value: 8, color: 'bg-purple-500' },
  { title: 'Notifications', value: 5, color: 'bg-yellow-500' },
]

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className={`p-4 rounded shadow ${card.color} text-white`}>
          <h3 className="text-sm font-medium">{card.title}</h3>
          <p className="mt-2 text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards

// frontend/components/dashboard/DashboardCharts.tsx
import React from 'react'

const DashboardCharts: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow h-64">Chart 1 Placeholder</div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow h-64">Chart 2 Placeholder</div>
    </div>
  )
}

export default DashboardCharts

// frontend/components/dashboard/DashboardTables.tsx
import React from 'react'

const DashboardTables: React.FC = () => {
  const tasks = [
    { id: 1, name: 'Design Landing Page', status: 'In Progress' },
    { id: 2, name: 'Fix Bugs', status: 'Pending' },
    { id: 3, name: 'Team Meeting', status: 'Completed' },
  ]
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded shadow p-4">
      <h2 className="font-bold mb-4 text-gray-900 dark:text-white">Tasks</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Task</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2">{task.id}</td>
              <td className="py-2">{task.name}</td>
              <td className="py-2">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardTables

// frontend/components/dashboard/QuickSearchModal.tsx
import React from 'react'
import { XIcon, SearchIcon } from '../ui/Icons'

interface Props {
  onClose: () => void
}

const shortcuts = [
  { name: 'Projects', action: 'Open Projects' },
  { name: 'Tasks', action: 'Open Tasks' },
  { name: 'Teams', action: 'Open Teams' },
  { name: 'Calendar', action: 'Open Calendar' },
]

const QuickSearchModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Quick Search</h2>
          <button onClick={onClose}><XIcon /></button>
        </div>
        <div className="space-y-2">
          {shortcuts.map((shortcut) => (
            <div key={shortcut.name} className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded">
              <SearchIcon className="mr-2" />
              {shortcut.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickSearchModal

// frontend/components/ui/Icons.tsx
import React from 'react'

export const SearchIcon = (props?: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
)
export const BellIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>)
export const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round
