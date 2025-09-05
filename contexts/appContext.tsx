import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ModalState {
  isOpen: boolean
  type: 'project' | 'task' | 'team' | null
  data?: any
}

interface AppContextProps {
  modal: ModalState
  openModal: (type: 'project' | 'task' | 'team', data?: any) => void
  closeModal: () => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, type: null })

  const openModal = (type: 'project' | 'task' | 'team', data?: any) => {
    setModal({ isOpen: true, type, data })
  }

  const closeModal = () => {
    setModal({ isOpen: false, type: null, data: undefined })
  }

  return (
    <AppContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
