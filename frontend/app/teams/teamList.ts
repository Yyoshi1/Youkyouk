import React from 'react'
import { Link } from 'react-router-dom'

const teams = [
  { id: 1, name: 'Frontend Team', members: 5 },
  { id: 2, name: 'Backend Team', members: 3 },
  { id: 3, name: 'Design Team', members: 4 },
]

const TeamList: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Teams</h3>
      <ul>
        {teams.map((team) => (
          <li key={team.id} className="p-2 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
            <Link to={`/teams/${team.id}`} className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-white">{team.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">{team.members} members</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamList
