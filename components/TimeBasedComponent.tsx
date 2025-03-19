'use client'

import { useState, useEffect } from 'react'

export default function TimeBasedComponent() {
  const [time, setTime] = useState<string>('')
  
  useEffect(() => {
    setTime(new Date().toISOString())
  }, [])

  return <div>{time}</div>
}