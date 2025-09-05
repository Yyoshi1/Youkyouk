import React, { useEffect, useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import api from '../lib/api'

interface Member {
  id: number
  name: string
  role: string
}

const TeamsPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([])

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await api.get('/teams')
      setMembers(response.data)
    }
    fetchMembers()
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Team Members</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member) => (
              <div key={member.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                <h2 className="font-semibold">{member.name}</h2>
                <p>Role: {member.role}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default TeamsPage
