// /components/ui/Modal.tsx
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Button from './Button'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
  ...props
}) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      {...props}
    >
      <div
        className={clsx(
          'bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 transition-transform transform scale-100',
          className
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-900 dark:text-gray-100 text-lg font-semibold">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="mb-4 text-gray-700 dark:text-gray-300">{children}</div>

        {/* Footer */}
        {footer ? (
          <div className="flex justify-end space-x-2">{footer}</div>
        ) : null}
      </div>
    </div>
  )
}

export default Modal
