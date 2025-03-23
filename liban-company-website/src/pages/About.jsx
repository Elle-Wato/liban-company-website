import React from "react";
import "../styles/About.css"; // Optional: Create a separate CSS file for About styles

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Liban Agro-Trading Company (LATC) is dedicated to empowering Somali farmers with high-quality agricultural inputs and innovative solutions. Established in 2014, we have grown to become a trusted partner for farmers across South West, Hirshabelle, Galmudug, and Jubbaland.
      </p>
      
      <div className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To empower Somali farmers with high-quality agricultural inputs, expert advice, and sustainable farming practices, ensuring bountiful harvests, improved livelihoods, and food security for the nation.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted and innovative agro-trading company in Somalia, delivering high-quality agricultural solutions that drive productivity, profitability, and sustainability for farmers and agribusinesses.
          </p>
        </div>
      </div>

      <h3>Our Core Values</h3>
      <div className="core-values">
        <ul>
          <li>Quality: We provide only the best agricultural inputs and services.</li>
          <li>Innovation: We embrace modern technologies and practices to enhance farming efficiency.</li>
          <li>Sustainability: We promote environmentally friendly farming practices.</li>
          <li>Empowerment: We support farmers with knowledge, tools, and resources to succeed.</li>
          <li>Community Focus: We are dedicated to the development of rural communities and sustainable agriculture.</li>
        </ul>
      </div>

      <div className="cta">
        <h3>Join Us in Empowering Farmers</h3>
        <p>Learn more about our initiatives and how you can get involved!</p>
        <a href="#contact"> {/* Use anchor link to scroll to contact section */}
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default About;