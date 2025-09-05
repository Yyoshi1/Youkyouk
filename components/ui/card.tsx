// /components/ui/Card.tsx
import React from 'react'
import clsx from 'clsx'

interface CardProps {
  title: string
  value: string | number
  color?: 'blue' | 'green' | 'red' | 'yellow'
}

const colorMap = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  red: 'bg-red-100 text-red-700',
  yellow: 'bg-yellow-100 text-yellow-700',
}

const Card: React.FC<CardProps> = ({ title, value, color = 'blue' }) => {
  return (
    <div className={clsx('p-4 rounded shadow flex flex-col', colorMap[color])}>
      <span className="text-sm font-medium">{title}</span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  )
}

export default Card
