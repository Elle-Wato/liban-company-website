import React from "react";
import "../styles/global.css";

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
        <li><button onClick={() => scrollToSection("home")}>Home</button></li>
        <li><button onClick={() => scrollToSection("about")}>About</button></li>
        <li><button onClick={() => scrollToSection("products")}>Products</button></li>
        <li><button onClick={() => scrollToSection("community")}>Community</button></li>
        <li><button onClick={() => scrollToSection("team")}>Team</button></li>
        <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;