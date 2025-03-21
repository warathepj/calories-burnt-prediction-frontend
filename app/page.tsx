import DynamicContent from '@/components/DynamicContent'
import HelloWorld from '@/components/HelloWorld'
import CaloriesBurnedByGender from '@/components/CaloriesBurnedByGender'
import CaloriesByAge from '@/components/CaloriesByAge'
import CaloriesBurnedHeight from '@/components/CaloriesBurnedHeight'
import CaloriesBurnedWeight from '@/components/CaloriesBurnedWeight'
import CorrelationMatrix from '@/components/CorrelationMatrix'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <DynamicContent fallback={<p>Loading...</p>}>
          <HelloWorld />
          <div className="flex flex-col space-y-8 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div><CaloriesBurnedByGender/></div>
              <div><CaloriesByAge /></div>
              <div><CaloriesBurnedHeight /></div>
              <div><CaloriesBurnedWeight /></div>
            </div>
            <div className="w-full">
              <CorrelationMatrix />
            </div>
          </div>
      </DynamicContent>
    </main>
  )
}







