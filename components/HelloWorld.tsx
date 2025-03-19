'use client'

import { useState, useEffect } from 'react'

export default function HelloWorld() {
  const [data, setData] = useState<{ message: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/')
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError('Failed to fetch message')
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <span className="text-red-500">{error}</span>
  }

  if (!data) {
    return <span className="text-gray-500">Loading...</span>
  }

  return <span className="text-black">{data.message}</span>
}