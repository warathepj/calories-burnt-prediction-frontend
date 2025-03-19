'use client'

import { useEffect, useState } from 'react'

export default function ClientWrapper({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
}