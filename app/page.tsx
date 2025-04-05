import DynamicContent from '@/components/DynamicContent'
import HelloWorld from '@/components/HelloWorld'
import CaloriesBurnedByGender from '@/components/CaloriesBurnedByGender'
import CaloriesByAge from '@/components/CaloriesByAge'
import CaloriesBurnedHeight from '@/components/CaloriesBurnedHeight'
import CaloriesBurnedWeight from '@/components/CaloriesBurnedWeight'
import CorrelationMatrix from '@/components/CorrelationMatrix'
import CaloriesByDuration from '@/components/CaloriesByDuration'
import CaloriesByHeartRate from '@/components/CaloriesByHeartRate'
import CaloriesByBodyTemp from '@/components/CaloriesByBodyTemp'
import CaloriesDurationHeartRate from '@/components/CaloriesDurationHeartRate'
import CaloriesDurationBodyTemp from '@/components/CaloriesDurationBodyTemp'
import DurationVitalsCorrelation from '@/components/DurationVitalsCorrelation'
import TallGenderComparison from '@/components/TallGenderComparison'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DynamicContent fallback={<p>Loading...</p>}>
          <HelloWorld />
          
          {/* Navigation Section */}
          <div className="w-full max-w-4xl mx-auto my-12">
            <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
                Explore Data Analysis
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="#gender-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Gender Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>
                
                <a 
                  href="#age-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Age Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>
                
                <a 
                  href="#height-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Height Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>
                
                <a 
                  href="#weight-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Weight Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>
                
                <a 
                  href="#correlation-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Correlation Matrix</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>
              </div>

              {/* New separate div for Duration and Heart Rate Analysis */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="#duration-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Duration Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>
                
                <a 
                  href="#heart-rate-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Heart Rate Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>

                <a 
                  href="#body-temp-chart" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Body Temperature Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>

                <a 
                  href="#calories-duration-heart-rate" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Duration & Heart Rate Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>

                <a 
                  href="#calories-duration-body-temp" 
                  className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 
                    text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-200 group overflow-hidden"
                >
                  <span className="relative z-10">Duration & Body Temp Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left">
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="flex flex-col space-y-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div id="gender-chart" className="scroll-mt-24">
                <CaloriesBurnedByGender/>
              </div>
              <div id="age-chart" className="scroll-mt-24">
                <CaloriesByAge />
              </div>
              <div id="height-chart" className="scroll-mt-24">
                <CaloriesBurnedHeight />
              </div>
              <div id="weight-chart" className="scroll-mt-24">
                <CaloriesBurnedWeight />
              </div>
              <div id="duration-chart" className="scroll-mt-24">
                <CaloriesByDuration />
              </div>
              <div id="heart-rate-chart" className="scroll-mt-24">
                <CaloriesByHeartRate />
              </div>
              <div id="body-temp-chart" className="scroll-mt-24">
                <CaloriesByBodyTemp />
              </div>
              <div id="calories-duration-heart-rate" className="scroll-mt-24">
                <CaloriesDurationHeartRate />
              </div>
              <div id="calories-duration-body-temp" className="scroll-mt-24">
                <CaloriesDurationBodyTemp />
              </div>
              <div id="duration-vitals-correlation" className="scroll-mt-24 col-span-2">
                <DurationVitalsCorrelation />
              </div>
              <div id="tall-gender-comparison" className="scroll-mt-24">
                <TallGenderComparison />
              </div>
            </div>
            <div id="correlation-chart" className="w-full scroll-mt-24">
              <CorrelationMatrix />
            </div>
          </div>

          <ScrollToTop />
      </DynamicContent>
    </main>
  )
}















