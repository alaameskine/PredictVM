import React from "react";
import windowsLogo from "../../assets/images/windows10.png"; // Assure-toi d'avoir ce logo
import linuxLogo from "../../assets/images/linux.png"; // Idem pour ce logo

const VMList = () => {
  const vms = [
    { id: 1, name: "Windows 10", os: "Windows", description: "VM pour le test Windows", logo: windowsLogo },
    { id: 2, name: "Linux Server 1", os: "Linux", description: "Serveur Linux pour déploiement", logo: linuxLogo },
    { id: 3, name: "Linux Server 2", os: "Linux", description: "Machine de sauvegarde", logo: linuxLogo },
  ];

  return (
    <div className="vm-list">
      {vms.map((vm) => (
        <div key={vm.id} className="vm-card">
          <div className="vm-card-header">
            <img src={vm.logo} alt={vm.os} className="vm-logo" />
            <h3>{vm.name}</h3>
          </div>
          <div className="vm-card-body">
            <p><strong>OS :</strong> {vm.os}</p>
            <p>{vm.description}</p>
          </div>
          <div className="vm-card-footer">
            <button className="details-btn">Voir Détails</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VMList;
