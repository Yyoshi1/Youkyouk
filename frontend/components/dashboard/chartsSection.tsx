// frontend/components/dashboard/ChartsSection.tsx
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from 'recharts'

const lineData = [
  { name: 'Jan', Projects: 30, Tasks: 20 },
  { name: 'Feb', Projects: 45, Tasks: 25 },
  { name: 'Mar', Projects: 60, Tasks: 35 },
  { name: 'Apr', Projects: 50, Tasks: 40 },
  { name: 'May', Projects: 70, Tasks: 45 },
]

const barData = [
  { name: 'Team A', Completed: 40, Pending: 20 },
  { name: 'Team B', Completed: 30, Pending: 25 },
  { name: 'Team C', Completed: 50, Pending: 15 },
]

const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Line Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Projects vs Tasks</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Projects" stroke="#4F46E5" strokeWidth={2} />
            <Line type="monotone" dataKey="Tasks" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Team Performance</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Completed" fill="#4F46E5" />
            <Bar dataKey="Pending" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartsSection
