import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const VMDetails = () => {
  const { vmId } = useParams(); // Récupérer l'ID de la VM dans l'URL
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    // Charger les données pour la VM spécifique (ici "vmId")
    const loadMetrics = async () => {
      try {
        const response = await fetch(`/vm_metrics_${vmId}.json`); // Exemple : fichier différent pour chaque VM
        const data = await response.json();
        setMetricsData(data[vmId]); // Par exemple, "win10" ou "linux01"
      } catch (error) {
        console.error("Erreur lors du chargement des données pour", vmId, error);
      }
    };
    loadMetrics();
  }, [vmId]);

  const prepareChartData = (metric) => {
    const timestamps = metricsData.map((item) => item.timestamp);
    const values = metricsData.map((item) => item.metrics[metric]);

    return {
      labels: timestamps,
      datasets: [
        {
          label: metric,
          data: values,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
  };

  return (
    <div>
      <h1>VM Détails: {vmId}</h1>
      {!metricsData.length ? (
        <p>Chargement des données...</p>
      ) : (
        <div>
          <h2>Métriques de la VM</h2>
          <Line data={prepareChartData('cpu_time')} />
          <Line data={prepareChartData('memory_used_mb')} />
        </div>
      )}
    </div>
  );
};

export default VMDetails;
