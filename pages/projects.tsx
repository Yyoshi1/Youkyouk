import React, { useEffect, useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import api from '../lib/api'

interface Project {
  id: number
  name: string
  status: string
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await api.get('/projects')
      setProjects(response.data)
    }
    fetchProjects()
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                <h2 className="font-semibold">{project.name}</h2>
                <p>Status: {project.status}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProjectsPage
