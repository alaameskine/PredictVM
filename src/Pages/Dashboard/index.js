import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrement des composants requis pour Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const Dashboard = () => {
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const response = await fetch("/vm_metrics.json");
        const data = await response.json();

        if (data && data.win10) {
          setMetricsData(data.win10);
        } else {
          console.error("Structure inattendue dans le JSON.");
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données JSON :", error);
      }
    };

    loadMetrics();
  }, []);

  const prepareChartData = (metric) => {
    const timestamps = metricsData.map((item) => item.timestamp);
    const values = metricsData.map((item) => item.metrics[metric]);

    return {
      labels: timestamps,
      datasets: [
        {
          label: metric,
          data: values,
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
          tension: 0.1,
        },
      ],
    };
  };

  const metrics = [
    "cpu_time",
    "memory_used_mb",
    "disk_read_bytes",
    "disk_write_bytes",
    "network_rx_bytes",
    "network_tx_bytes",
  ];

  return (
    <div className="main-content">
      <h1>Bienvenue sur le Dashboard</h1>
      {!metricsData.length ? (
        <p>Chargement des données...</p>
      ) : (
        metrics.map((metric) => (
          <div key={metric} className="chart-container">
            <h3>{metric}</h3>
            <Line data={prepareChartData(metric)} />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
