'use client'
import CaloriesBurnedByGender from '@/components/CaloriesBurnedByGender'

export default function TestChartPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Calories Analysis</h1>
      <CaloriesBurnedByGender />
    </main>
  )
}
