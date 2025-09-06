import React from 'react'
import { useParams } from 'react-router-dom'

const TeamDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const team = { id, name: 'Frontend Team', members: ['Alice', 'Bob', 'Charlie', 'David', 'Eve'] }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{team.name}</h2>
      <h3 className="mt-2 font-medium text-gray-700 dark:text-gray-300">Members:</h3>
      <ul className="list-disc list-inside">
        {team.members.map((member) => (
          <li key={member} className="text-gray-900 dark:text-white">{member}</li>
        ))}
      </ul>
    </div>
  )
}

export default TeamDetail
