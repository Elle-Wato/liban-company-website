import React from "react";
import { FaHome, FaInfoCircle, FaBoxOpen, FaUsers, FaUserFriends, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Added FaEnvelope for email
import "../styles/global.css";
//import logo from "../images/logo.png"; // Adjust the path as necessary

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
      <ul>
        <li><button onClick={() => scrollToSection("home")}><FaHome /> Home</button></li>
        <li><button onClick={() => scrollToSection("about")}><FaInfoCircle /> About</button></li>
        <li><button onClick={() => scrollToSection("products")}><FaBoxOpen /> Products</button></li>
        <li><button onClick={() => scrollToSection("community")}><FaUsers /> Community</button></li>
        <li><button onClick={() => scrollToSection("team")}><FaUserFriends /> Team</button></li>
        <li><button onClick={() => scrollToSection("contact")}><FaPhone /> Contact</button></li>
      </ul>
      <div className="contact-info">
        <span><FaMapMarkerAlt />Bakaro Market, Mogadishu-Somalia</span>
        <span><FaPhone />(252) 611-273-333</span>
        <span><FaEnvelope />liiban.trading@gmail.com</span> {/* Added Email */}
      </div>
    </nav>
  );
};

export default Navbar;
