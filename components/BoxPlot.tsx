'use client'
import dynamic from 'next/dynamic'

// Import Plot component with SSR disabled
const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
  loading: () => <div>Loading Plot...</div>
})

const BoxPlot = () => {
  const data = [
    {
      y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      type: 'box',
      name: 'Sample Box'
    }
  ]
  
  const layout = {
    title: 'Box Plot Example',
    width: 720,
    height: 480
  }
  
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Plot 
        data={data}
        layout={layout}
        config={{ responsive: true }}
      />
    </div>
  )
}

export default BoxPlot
