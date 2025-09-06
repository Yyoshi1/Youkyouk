import React from 'react'
import { Link } from 'react-router-dom'

const issues = [
  { id: 1, title: 'Login Bug', status: 'Open', priority: 'High' },
  { id: 2, title: 'UI Alignment', status: 'In Progress', priority: 'Medium' },
  { id: 3, title: 'Performance Issue', status: 'Closed', priority: 'Low' },
]

const IssueList: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Issues</h3>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} className="p-2 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
            <Link to={`/issues/${issue.id}`} className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-white">{issue.title}</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">{issue.status} - {issue.priority}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IssueList
