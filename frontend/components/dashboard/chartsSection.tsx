import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 50 },
  { name: 'May', value: 75 },
]

const ChartsSection: React.FC = () => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-medium mb-2">Project Progress</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartsSection
