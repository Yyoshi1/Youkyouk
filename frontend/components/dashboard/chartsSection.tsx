// /components/dashboard/ChartsSection.tsx
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const data = [
  { name: 'Jan', projects: 30, tasks: 50 },
  { name: 'Feb', projects: 40, tasks: 65 },
  { name: 'Mar', projects: 35, tasks: 55 },
  { name: 'Apr', projects: 50, tasks: 70 },
  { name: 'May', projects: 55, tasks: 75 },
  { name: 'Jun', projects: 60, tasks: 80 },
]

const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Projects Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? '#374151' : '#e5e7eb'} />
            <XAxis dataKey="name" stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? '#d1d5db' : '#4b5563'} />
            <YAxis stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? '#d1d5db' : '#4b5563'} />
            <Tooltip
              contentStyle={{ backgroundColor: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#1f2937' : '#ffffff', borderRadius: 6 }}
            />
            <Line type="monotone" dataKey="projects" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="tasks" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartsSection
