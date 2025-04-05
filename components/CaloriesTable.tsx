'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchCaloriesData } from '@/store/slices/caloriesSlice'

interface CaloriesTableProps {
  limit?: number;
}

export default function CaloriesTable({ limit }: CaloriesTableProps) {
  const dispatch = useAppDispatch()
  const { data, status, error } = useAppSelector((state) => state.calories)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCaloriesData())
    }
  }, [dispatch, status])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Error: {error}</div>
  if (!data.length) return <div>No data available</div>

  // Apply limit to data if specified
  const displayData = limit ? data.slice(0, limit) : data

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">User ID</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Height</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Heart Rate</th>
              <th className="border p-2">Body Temp</th>
              <th className="border p-2">Calories</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2">{row.User_ID}</td>
                <td className="border p-2">{row.Gender}</td>
                <td className="border p-2">{row.Age}</td>
                <td className="border p-2">{row.Height}</td>
                <td className="border p-2">{row.Weight}</td>
                <td className="border p-2">{row.Duration}</td>
                <td className="border p-2">{row.Heart_Rate}</td>
                <td className="border p-2">{row.Body_Temp}</td>
                <td className="border p-2">{row.Calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-500 mt-2 text-center">
        Showing {displayData.length} of {data.length} entries
      </div>
    </div>
  )
}
