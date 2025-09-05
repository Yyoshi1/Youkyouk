// /components/ui/Card.tsx
import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  footer?: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
  footer,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition hover:shadow-lg',
        className
      )}
      {...props}
    >
      <div className="flex items-center space-x-3 mb-3">
        {icon && <div className="w-6 h-6 text-blue-600">{icon}</div>}
        <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg">
          {title}
        </h3>
      </div>
      {description && (
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
          {description}
        </p>
      )}
      {footer && <div className="mt-2">{footer}</div>}
    </div>
  )
}

export default Card
