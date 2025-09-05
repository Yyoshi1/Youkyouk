import React, { useState, useEffect } from 'react'

interface SearchItem {
  id: number
  type: 'Task' | 'Project' | 'Team'
  name: string
}

const items: SearchItem[] = [
  { id: 1, type: 'Task', name: 'Design Homepage' },
  { id: 2, type: 'Project', name: 'Project Alpha' },
  { id: 3, type: 'Team', name: 'Frontend Team' },
  { id: 4, type: 'Task', name: 'Setup Backend' },
  { id: 5, type: 'Project', name: 'Project Beta' },
]

const GlobalSearch: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'e') {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded shadow-lg w-full max-w-lg">
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring dark:bg-gray-700 dark:text-white"
          />
          <button onClick={() => setOpen(false)} className="ml-2 text-gray-600 dark:text-gray-300">
            ✕
          </button>
        </div>
        <ul className="max-h-80 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <span className="font-medium">{item.name}</span>{' '}
                <span className="text-sm text-gray-500 dark:text-gray-400">({item.type})</span>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 dark:text-gray-400">No results found.</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default GlobalSearch
