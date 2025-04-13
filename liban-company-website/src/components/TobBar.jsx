import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <span><FaMapMarkerAlt /> Bakaro Market, Mogadishu</span>
        <span><FaPhone /> (252) 611-273-333</span>
        <span><FaEnvelope /> liiban.trading@gmail.com</span>
      </div>
    </div>
  );
};

export default TopBar;
