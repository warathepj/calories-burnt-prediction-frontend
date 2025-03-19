'use client'

import { useEffect, useState } from 'react'

interface RootLayoutWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function RootLayoutWrapper({ children, className }: RootLayoutWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {children}
    </>
  )
}