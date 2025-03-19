'use client'

import { useEffect, useState } from 'react'

export default function DynamicContent({
  children,
  fallback = <div>Loading...</div>
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? children : fallback
}