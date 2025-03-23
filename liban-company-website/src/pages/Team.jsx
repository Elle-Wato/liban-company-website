import React from "react";
import "../styles/Team.css"; // Optional: Create a separate CSS file for Team styles

const Team = () => {
  const teamMembers = [
    {
      name: "Fardowsa Ahmed Diiriye",
      role: "CEO",
      description: "Fardowsa leads the company with a vision to empower farmers and enhance agricultural productivity.",
      image: "path/to/fardowsa-image.jpg" // Replace with actual image path
    },
    {
      name: "Fadumo Ibrahim Weheliye",
      role: "Vice CEO",
      description: "Fadumo supports the CEO in strategic planning and operational management.",
      image: "path/to/fadumo-image.jpg" // Replace with actual image path
    },
    {
      name: "Fadumo Mohamed Ahmed",
      role: "Admin/Finance Coordinator",
      description: "Fadumo manages the financial operations and administrative tasks of the company.",
      image: "path/to/fadumo-mohamed-image.jpg" // Replace with actual image path
    },
    {
      name: "Ali Hassan Saney",
      role: "Agronomist",
      description: "Ali provides expert agronomic advice and support to farmers.",
      image: "path/to/ali-image.jpg" // Replace with actual image path
    },
    {
      name: "Amino Mohamed Adan",
      role: "Monitoring & Evaluation",
      description: "Amino oversees project evaluations and ensures the effectiveness of initiatives.",
      image: "path/to/amino-image.jpg" // Replace with actual image path
    }
  ];

  return (
    <div className="team">
      <h2>Our Team</h2>
      <p>Meet our experienced board of directors and agronomists dedicated to empowering Somali farmers.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
      <div className="cta">
        <h3>Learn More About Our Initiatives</h3>
        <p>Contact us to find out how our team is making a difference in the agricultural sector!</p>
        <a href="#contact"> {/* Anchor link to the Contact section */}
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Team;