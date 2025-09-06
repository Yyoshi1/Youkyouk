import React, { useState, useEffect } from 'react'

interface Shortcut {
  name: string
  action: () => void
}

const shortcuts: Shortcut[] = [
  { name: 'Open Projects', action: () => console.log('Open Projects') },
  { name: 'Create Task', action: () => console.log('Create Task') },
  { name: 'Team Members', action: () => console.log('Team Members') },
  { name: 'Notifications', action: () => console.log('Notifications') },
  { name: 'Reports', action: () => console.log('Reports') },
]

const SearchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'e') {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Shortcuts</h3>
        <ul className="space-y-2">
          {shortcuts.map((s) => (
            <li
              key={s.name}
              onClick={() => {
                s.action()
                setIsOpen(false)
              }}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchModal
