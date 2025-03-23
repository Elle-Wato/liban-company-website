import React from "react";
import "../styles/Community.css"; // Optional: Create a separate CSS file for Community styles

const Community = () => {
  return (
    <div className="community">
      <h2>Community Engagement</h2>
      <p>
        At Liban Agro-Trading Company, we believe in the power of community. We support sustainable agriculture and rural development initiatives that empower farmers and enhance food security.
      </p>
      
      <h3>Our Initiatives</h3>
      <ul>
        <li>
          <strong>Training Programs:</strong> We offer workshops on modern farming techniques, sustainable practices, and financial management to help farmers improve their productivity.
        </li>
        <li>
          <strong>Partnerships with NGOs:</strong> We collaborate with local and international organizations to address food security challenges and promote sustainable agriculture.
        </li>
        <li>
          <strong>Sponsorship of Local Events:</strong> We actively participate in agricultural fairs and exhibitions to promote best practices and connect with the farming community.
        </li>
      </ul>

      <h3>Impact Stories</h3>
      <p>
        "Thanks to LATC's training programs, I have learned new techniques that have significantly increased my crop yields." - <em>Amina, Local Farmer</em>
      </p>

      <div className="cta">
        <h3>Get Involved</h3>
        <p>Join us in our mission to empower farmers and strengthen communities. Learn more about our initiatives!</p>
        
        <a href="#contact"> {/* Anchor link to the Contact section */}
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Community;