'use client'

import { useState, useEffect } from 'react'

export default function HelloMessage() {
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => setError('Failed to fetch message'))
  }, [])

  if (error) return <div>Error: {error}</div>
  if (!message) return <div>Loading...</div>

  return <div>{message}</div>
}