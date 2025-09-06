import React, { useState, useEffect } from 'react'
import { XIcon } from '@heroicons/react/outline'

interface Shortcut {
  name: string
  description: string
}

const shortcuts: Shortcut[] = [
  { name: 'Dashboard', description: 'Go to main dashboard' },
  { name: 'Projects', description: 'View all projects' },
  { name: 'Tasks', description: 'View your tasks' },
  { name: 'Team', description: 'View team members' },
  { name: 'Calendar', description: 'Open your calendar' },
  { name: 'Reports', description: 'View analytics and reports' },
  { name: 'Settings', description: 'Adjust your preferences' },
  { name: 'Integrations', description: 'Manage third-party apps' },
  { name: 'Notifications', description: 'View notifications' },
  { name: 'Help Center', description: 'Get support and docs' },
  { name: 'Logout', description: 'Sign out of your account' },
]

const SearchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filteredShortcuts = shortcuts.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'e') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
    if (e.key === 'Escape') setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-96 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Search</h3>
          <button onClick={() => setIsOpen(false)}>
            <XIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Type to search..."
          autoFocus
        />
        <ul className="mt-4 max-h-60 overflow-y-auto">
          {filteredShortcuts.map((shortcut) => (
            <li
              key={shortcut.name}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <div className="font-medium text-gray-900 dark:text-white">{shortcut.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">{shortcut.description}</div>
            </li>
          ))}
          {filteredShortcuts.length === 0 && (
            <li className="p-2 text-gray-500 dark:text-gray-400">No results found</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default SearchModal
