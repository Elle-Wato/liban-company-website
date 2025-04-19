import React from "react";
import {
  FaInfoCircle, FaBoxOpen, FaUsers, FaUserFriends, FaPhone, FaMapMarkerAlt, FaEnvelope
} from "react-icons/fa";
import "../styles/global.css";
import logo from "/images/logo.png"; // Make sure this path is correct

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID "${id}" not found.`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="logo-button logo" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="Liban Logo" className="navbar-logo" />
        </button>
      </div>
      <ul className="navbar-menu">
        <li><button onClick={() => scrollToSection("about")}><FaInfoCircle /> About</button></li>
        <li><button onClick={() => scrollToSection("products")}><FaBoxOpen /> Products</button></li>
        <li><button onClick={() => scrollToSection("community")}><FaUsers /> Community</button></li>
        <li><button onClick={() => scrollToSection("team")}><FaUserFriends /> Team</button></li>
        <li><button onClick={() => scrollToSection("contact")}><FaPhone /> Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
