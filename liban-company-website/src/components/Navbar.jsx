import React, { useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaBoxOpen,
  FaUsers,
  FaUserFriends,
  FaPhone,
} from "react-icons/fa";
import "../styles/global.css";
import logo from "/images/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
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
