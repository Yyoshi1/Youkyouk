import React, { useEffect, useState } from 'react'

interface CommandItem {
  name: string
  action: () => void
}

const commands: CommandItem[] = [
  { name: 'Go to Inbox', action: () => console.log('Navigating to Inbox') },
  { name: 'Create Project', action: () => console.log('Open Create Project Modal') },
  { name: 'Open Tasks', action: () => console.log('Navigating to Tasks') },
  { name: 'View Reports', action: () => console.log('Navigating to Reports') },
]

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'e') {
      e.preventDefault()
      setOpen(!open)
    }
    if (e.key === 'Escape') setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center pt-24 z-50">
      <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded shadow-lg p-4">
        <input
          type="text"
          autoFocus
          placeholder="Type a command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 mb-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul>
          {filteredCommands.map((cmd, idx) => (
            <li
              key={idx}
              className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                cmd.action()
                setOpen(false)
              }}
            >
              {cmd.name}
            </li>
          ))}
          {filteredCommands.length === 0 && (
            <li className="px-3 py-2 text-gray-400">No commands found</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default CommandPalette
