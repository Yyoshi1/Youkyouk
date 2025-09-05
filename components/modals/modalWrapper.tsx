import React from 'react'
import { useAppContext } from '../../contexts/AppContext'

interface ModalWrapperProps {
  children: React.ReactNode
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  const { modal, closeModal } = useAppContext()

  if (!modal.isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96 p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default ModalWrapper
