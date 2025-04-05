'use client'
import { useEffect, useState } from 'react'
interface ChartData {  image: string;
  error?: string;}
export default function TallGenderComparison() {
  const [chartData, setChartData] = useState<ChartData | null>(null);  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {    const fetchChart = async () => {
      try {        const response = await fetch('http://localhost:8000/api/plot/tall-gender-comparison');
        const data = await response.json();        
        if (data.error) {          throw new Error(data.error);
        }        
        setChartData(data);      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch chart');      } finally {
        setIsLoading(false);      }
    };
    fetchChart();  }, []);
  if (isLoading) {
    return (      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading chart...</div>      </div>
    );  }
  if (error) {
    return (      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500">Error: {error}</div>      </div>
    );  }
  if (!chartData?.image) {
    return (      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">No chart data available</div>      </div>
    );  }
  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">      <h2 className="text-xl font-semibold">Calories vs Duration for Tall Individuals</h2>
      <div className="w-full max-w-3xl">        <img 
          src={`data:image/png;base64,${chartData.image}`}          alt="Calories vs Duration comparison for tall males and females"
          className="w-full h-auto"        />
      </div>    </div>
  );
}




































