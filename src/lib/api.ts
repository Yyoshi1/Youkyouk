import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
})

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

export const getProjects = () => api.get('/projects')
export const createProject = (data: { name: string; description?: string }) => api.post('/projects', data)
export const updateProject = (id: string, data: { name?: string; description?: string }) => api.put(`/projects/${id}`, data)
export const deleteProject = (id: string) => api.delete(`/projects/${id}`)

export default api
