import React, { useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

const CreateProjectModal: React.FC<Props> = ({ open, onClose }) => {
  const [projectName, setProjectName] = useState('')

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md p-6 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 mb-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log('Project created:', projectName)
              onClose()
            }}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateProjectModal
