import React from 'react'
import { useParams } from 'react-router-dom'

const IssueDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // API
  const issue = { id, title: 'Login Bug', description: 'Cannot login with correct credentials', status: 'Open', priority: 'High' }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{issue.title}</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{issue.description}</p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Status: {issue.status}</p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Priority: {issue.priority}</p>
    </div>
  )
}

export default IssueDetail
