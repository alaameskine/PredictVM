import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import VMList from "./Pages/VMList";
import VMDetails from "./Pages/VMDetails";
import Sidebar from "./Component/Sidebar";
import "./App.css"; // Ajoutez votre fichier CSS global pour de meilleures pratiques de style

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar toujours affichée sur le côté gauche */}
        <Sidebar />
        
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          {/* Définition des routes avec un chemin par défaut */}
          <Routes>
            {/* Redirection vers /dashboard si la racine est accédée */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vm-list" element={<VMList />} />
            <Route path="/vm-details" element={<VMDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
