import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  { id: 1, name: 'Website Redesign', status: 'Active' },
  { id: 2, name: 'Mobile App', status: 'Completed' },
  { id: 3, name: 'Marketing Campaign', status: 'Pending' },
]

const ProjectList: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="p-2 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
            <Link to={`/projects/${project.id}`} className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-white">{project.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">{project.status}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
