'use client'
import { useState } from 'react'
import CaloriesTable from '@/components/CaloriesTable'

export default function Table() {
  const [limit, setLimit] = useState(20)

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 20)
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Calories Data</h1>
      <CaloriesTable limit={limit} />
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleLoadMore}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Load More
        </button>
      </div>
    </main>
  )
}
