"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import RequestDemoModal from '@/components/RequestDemoModal'

interface DemoContextType {
  openDemoModal: () => void
  closeDemoModal: () => void
}

const DemoContext = createContext<DemoContextType | undefined>(undefined)

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openDemoModal = () => setIsOpen(true)
  const closeDemoModal = () => setIsOpen(false)

  return (
    <DemoContext.Provider value={{ openDemoModal, closeDemoModal }}>
      {children}
      <RequestDemoModal isOpen={isOpen} onClose={closeDemoModal} />
    </DemoContext.Provider>
  )
}

export function useDemoModal() {
  const context = useContext(DemoContext)
  if (!context) {
    throw new Error('useDemoModal must be used within a DemoModalProvider')
  }
  return context
}