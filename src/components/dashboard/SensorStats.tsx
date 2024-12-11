import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Sensor Data',
    },
  },
};

// Simulated sensor data
const generateData = () => {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  return {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: labels.map(() => Math.random() * 30 + 10),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Humidity (%)',
        data: labels.map(() => Math.random() * 40 + 40),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
};

export default function SensorStats() {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Temperature & Humidity</h3>
        <Line options={options} data={data} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Soil Moisture</h3>
        <div className="text-4xl font-bold text-blue-500">78%</div>
        <p className="text-gray-500">Optimal Range: 60-80%</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Light Intensity</h3>
        <div className="text-4xl font-bold text-yellow-500">850 lux</div>
        <p className="text-gray-500">Optimal Range: 600-1000 lux</p>
      </div>
    </>
  );
}
