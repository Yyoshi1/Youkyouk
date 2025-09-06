import React from 'react'

interface CardProps {
  title: string
  value: number
  color?: string
}

const cards = [
  { title: 'Active Projects', value: 12, color: 'bg-blue-500' },
  { title: 'Tasks Today', value: 34, color: 'bg-green-500' },
  { title: 'Team Members', value: 8, color: 'bg-purple-500' },
  { title: 'Notifications', value: 5, color: 'bg-yellow-500' },
]

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className={`p-4 rounded shadow ${card.color} text-white`}>
          <h3 className="text-sm font-medium">{card.title}</h3>
          <p className="mt-2 text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards
