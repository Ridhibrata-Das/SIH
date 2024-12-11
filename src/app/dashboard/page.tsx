import dynamic from 'next/dynamic';
import SensorStats from '@/components/dashboard/SensorStats';

// Dynamically import the 3D visualization component to avoid SSR issues
const Farm3DVisualization = dynamic(
  () => import('@/components/3d/Farm3DVisualization'),
  { ssr: false }
);

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Export Report
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Add Sensor
          </button>
        </div>
      </div>

      {/* 3D Visualization */}
      <div className="h-[400px] bg-white rounded-lg shadow-lg p-4">
        <Farm3DVisualization />
      </div>

      {/* Sensor Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SensorStats />
      </div>
    </div>
  );
}
