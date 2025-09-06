// frontend/components/dashboard/DashboardCards.tsx
import React from 'react'
import { FolderIcon, UsersIcon, ChartBarIcon, BellIcon } from '@heroicons/react/24/outline'

interface CardProps {
  title: string
  value: number
  icon: React.ReactNode
  color?: string
}

const cards: CardProps[] = [
  { title: 'Active Projects', value: 12, icon: <FolderIcon className="w-6 h-6" />, color: 'bg-blue-500' },
  { title: 'Tasks Today', value: 34, icon: <ChartBarIcon className="w-6 h-6" />, color: 'bg-green-500' },
  { title: 'Team Members', value: 8, icon: <UsersIcon className="w-6 h-6" />, color: 'bg-purple-500' },
  { title: 'Notifications', value: 5, icon: <BellIcon className="w-6 h-6" />, color: 'bg-yellow-500' },
]

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className={`p-4 rounded shadow ${card.color} text-white flex items-center space-x-4`}>
          <div>{card.icon}</div>
          <div>
            <h3 className="text-sm font-medium">{card.title}</h3>
            <p className="mt-2 text-2xl font-bold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards
