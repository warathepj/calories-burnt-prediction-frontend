import CaloriesBurnedByGender from '@/components/CaloriesBurnedByGender'
import DynamicContent from '@/components/DynamicContent'
import HelloWorld from '@/components/HelloWorld'
import CaloriesByAge from '@/components/CaloriesByAge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <DynamicContent fallback={<p>Loading...</p>}>
          <HelloWorld />
          <CaloriesBurnedByGender/>
          <CaloriesByAge />
      </DynamicContent>
    </main>
  )
}


