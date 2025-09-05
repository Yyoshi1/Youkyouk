import React from 'react'
import {
  FolderIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  BellIcon,
} from '@heroicons/react/24/outline'

interface CardProps {
  title: string
  value: number
  color: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  subText?: string
}

const cards: CardProps[] = [
  { title: 'Active Projects', value: 12, color: 'bg-blue-500', icon: FolderIcon, subText: 'in progress' },
  { title: 'Tasks Today', value: 34, color: 'bg-green-500', icon: ClipboardDocumentIcon, subText: 'due today' },
  { title: 'Team Members', value: 8, color: 'bg-purple-500', icon: UserGroupIcon },
  { title: 'Notifications', value: 5, color: 'bg-yellow-500', icon: BellIcon },
]

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`p-4 rounded shadow ${card.color} text-white flex flex-col justify-between hover:scale-105 transition-transform`}
        >
          <div className="flex items-center space-x-3">
            <card.icon className="w-6 h-6" />
            <h3 className="text-sm font-medium">{card.title}</h3>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold">{card.value}</p>
            {card.subText && <p className="text-sm opacity-80">{card.subText}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards
