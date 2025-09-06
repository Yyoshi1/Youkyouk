import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // API
  const project = { id, name: 'Website Redesign', description: 'Redesign the company website', status: 'Active' }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Status: {project.status}</p>
    </div>
  )
}

export default ProjectDetail
