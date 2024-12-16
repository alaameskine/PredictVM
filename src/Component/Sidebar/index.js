import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { GrVmware } from "react-icons/gr";
import { VscVmRunning } from "react-icons/vsc";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const Sidebar = () => {
  const location = useLocation(); // Pour obtenir l'URL actuelle

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { path: "/vm-list", label: "VM List", icon: <GrVmware /> },
    { path: "/vm-details", label: "VM Details", icon: <VscVmRunning /> },
    { path: "/prediction-chart", label: "Prediction Chart", icon: <TbDeviceDesktopAnalytics /> },
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
            <Link to={item.path} style={{ textDecoration: "none" }}>
              <Button className="w-100">
                <span className="icon">{item.icon}</span>
                {item.label}
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
