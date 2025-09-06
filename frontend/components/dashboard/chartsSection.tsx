import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', projects: 3, tasks: 5 },
  { name: 'Tue', projects: 4, tasks: 7 },
  { name: 'Wed', projects: 2, tasks: 4 },
  { name: 'Thu', projects: 5, tasks: 6 },
  { name: 'Fri', projects: 6, tasks: 8 },
]

const ChartsSection: React.FC = () => {
  return (
    <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Weekly Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="projects" stroke="#6366f1" />
          <Line type="monotone" dataKey="tasks" stroke="#10b981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartsSection
