import React, { useState, useEffect } from 'react'
import { getProjects, createProject, updateProject, deleteProject } from '../../lib/api'

interface Project {
  id: string
  name: string
  description?: string
}

const ProjectModal: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)

  const fetchProjects = async () => {
    const res = await getProjects()
    setProjects(res.data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleSubmit = async () => {
    if (editingId) {
      await updateProject(editingId, { name, description })
    } else {
      await createProject({ name, description })
    }
    setName('')
    setDescription('')
    setEditingId(null)
    fetchProjects()
  }

  const handleEdit = (project: Project) => {
    setName(project.name)
    setDescription(project.description || '')
    setEditingId(project.id)
  }

  const handleDelete = async (id: string) => {
    await deleteProject(id)
    fetchProjects()
  }

  return (
    <div className="p-4 bg-white rounded shadow w-96 mx-auto my-6">
      <h2 className="text-lg font-bold mb-4">{editingId ? 'Edit Project' : 'New Project'}</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingId ? 'Update' : 'Create'}
      </button>

      <ul className="mt-4">
        {projects.map(p => (
          <li key={p.id} className="flex justify-between items-center py-1 border-b">
            <span>{p.name}</span>
            <div className="space-x-2">
              <button onClick={() => handleEdit(p)} className="text-yellow-500">Edit</button>
              <button onClick={() => handleDelete(p.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectModal
