export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to POSITRON</h1>
        <p className="text-gray-600">
          Your modern agricultural monitoring and sensor management system
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Sensor Status</h2>
          <p className="text-green-600">All systems operational</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Weather</h2>
          <p className="text-gray-600">Loading weather data...</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Recent Alerts</h2>
          <p className="text-gray-600">No recent alerts</p>
        </div>
      </div>
    </div>
  );
}
