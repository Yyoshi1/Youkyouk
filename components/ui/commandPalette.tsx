// /components/ui/CommandPalette.tsx
import React, { useState, useEffect } from 'react'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchResult {
  id: string
  type: 'Project' | 'Task' | 'User' | 'Notification'
  title: string
  link: string
}

interface CommandPaletteProps {
  results: SearchResult[]
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ results }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState<SearchResult[]>([])

  // Global shortcut Ctrl+E / Cmd+E
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'e') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Filter results
  useEffect(() => {
    if (!query) setFiltered([])
    else
      setFiltered(
        results.filter((r) =>
          r.title.toLowerCase().includes(query.toLowerCase())
        )
      )
  }, [query, results])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 w-full max-w-xl rounded shadow-lg p-4">
        <div className="flex items-center mb-4">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            autoFocus
            placeholder="Type to search..."
            className="flex-1 ml-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => setIsOpen(false)} className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition">
            <XMarkIcon className="w-4 h-4 text-gray-500 dark:text-gray-300" />
          </button>
        </div>

        <div className="max-h-64 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No results found</p>
          ) : (
            filtered.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <span className="text-sm font-medium">{item.title}</span>
                <span className="ml-auto text-xs text-gray-400">{item.type}</span>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
