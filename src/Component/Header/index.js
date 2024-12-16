import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";

const Header = () => {
  return (
    <header className="header d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row align-items-center justify-content-between">
          {/* Logo Wrapper */}
          <div className="col-md-3 col-sm-4 d-flex align-items-center">
            <Link to="/" className="d-flex align-items-center logo-wrapper">
              <img src={logo} alt="logo" className="logo" />
              <span className="ml-2 logo-text">PredictVM</span>
            </Link>
          </div>

          {/* Menu Button */}
          <div className="col-md-auto d-flex align-items-center justify-content-end">
            <Button className="menu-button rounded-circle">
              <MdMenuOpen size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
