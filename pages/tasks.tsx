import React, { useEffect, useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import api from '../lib/api'

interface Task {
  id: number
  title: string
  dueDate: string
  completed: boolean
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get('/tasks')
      setTasks(response.data)
    }
    fetchTasks()
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Tasks</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <div key={task.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                <h2 className="font-semibold">{task.title}</h2>
                <p>Due: {task.dueDate}</p>
                <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default TasksPage
