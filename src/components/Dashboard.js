import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  // Exemple de données pour les graphiques
  const cpuData = {
    labels: ['0h', '1h', '2h', '3h', '4h'],  // Labels pour l'axe X (temps)
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: [10, 15, 30, 45, 60],  // Données pour l'usage du CPU
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const memoryData = {
    labels: ['0h', '1h', '2h', '3h', '4h'],
    datasets: [
      {
        label: 'Memory Usage (%)',
        data: [40, 42, 45, 48, 50],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const diskData = {
    labels: ['0h', '1h', '2h', '3h', '4h'],
    datasets: [
      {
        label: 'Disk Space Usage (%)',
        data: [20, 25, 35, 50, 60],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-gradient-to-b from-blue-800 to-blue-900 text-white w-64 p-6 space-y-6 flex flex-col justify-between">
  <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
  <ul className="space-y-4">
    <li>
      <a
        href="#overview"
        className="text-lg hover:text-blue-400 hover:scale-105 transition duration-300"
      >
        Overview
      </a>
    </li>
    <li>
      <a
        href="#analytics"
        className="text-lg hover:text-blue-400 hover:scale-105 transition duration-300"
      >
        Analytics
      </a>
    </li>
    <li>
      <a
        href="#settings"
        className="text-lg hover:text-blue-400 hover:scale-105 transition duration-300"
      >
        Settings
      </a>
    </li>
  </ul>
</aside>


      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Dashboard Overview Section */}
        <section id="overview" className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Overview</h2>
          <p className="text-lg text-gray-600 mt-2">
            This is an overview of the system's resource usage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition duration-300 transform hover:translate-y-2">
              <h3 className="text-xl font-semibold text-gray-800">CPU Usage</h3>
              <Line data={cpuData} />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition duration-300 transform hover:translate-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Memory Usage</h3>
              <Line data={memoryData} />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition duration-300 transform hover:translate-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Disk Space Usage</h3>
              <Line data={diskData} />
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Analytics</h2>
          <p className="text-lg text-gray-600 mt-2">
            Detailed analytics of resource consumption trends over time.
          </p>
          <div className="mt-6">
            <p className="text-gray-600">This section can include detailed charts, reports, and trends.</p>
          </div>
        </section>

        {/* Settings Section */}
        <section id="settings" className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Settings</h2>
          <p className="text-lg text-gray-600 mt-2">
            Customize your dashboard settings, themes, and other preferences.
          </p>
          <div className="mt-6">
            <p className="text-gray-600">This section can include user settings like themes, notifications, etc.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
