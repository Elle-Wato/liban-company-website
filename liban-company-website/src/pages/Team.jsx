import React from "react";
import { FaUserTie, FaUserCheck } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import "../styles/Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Fardowsa Ahmed Diiriye",
      role: "CEO",
      description: "Fardowsa leads the company with a vision to empower farmers and enhance agricultural productivity.",
      icon: <FaUserTie />
    },
    {
      name: "Fadumo Ibrahim Weheliye",
      role: "Vice CEO",
      description: "Fadumo supports the CEO in strategic planning and operational management.",
      icon: <FaUserTie />
    },
    {
      name: "Fadumo Mohamed Ahmed",
      role: "Admin/Finance Coordinator",
      description: "Fadumo manages the financial operations and administrative tasks of the company.",
      icon: <FaUserTie />
    },
    {
      name: "Ali Hassan Saney",
      role: "Agronomist",
      description: "Ali provides expert agronomic advice and support to farmers.",
      icon: <GiFarmer />
    },
    {
      name: "Amino Mohamed Adan",
      role: "Monitoring & Evaluation",
      description: "Amino oversees project evaluations and ensures the effectiveness of initiatives.",
      icon: <FaUserCheck />
    }
  ];

  return (
    <div className="team">
      <h2>Our Team</h2>
      <p>Meet our experienced board of directors and agronomists dedicated to empowering Somali farmers.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="icon">{member.icon}</div>
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
      <div className="cta">
        <h3>Learn More About Our Initiatives</h3>
        <p>Contact us to find out how our team is making a difference in the agricultural sector!</p>
        <a href="#contact">
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Team;
