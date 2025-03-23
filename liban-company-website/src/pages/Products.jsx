import React from "react";
import "../styles/Products.css"; // Optional: Create a separate CSS file for product styles

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <p>At Liban Agro-Trading Company, we provide a wide range of high-quality agricultural products to empower farmers and enhance productivity.</p>
      
      <div className="product-category">
        <img src="/images/seed.png" alt="SARIS Certified Seeds" /> {/* Replace with actual image path */}
        <div className="product-info">
          <h3>SARIS Certified Seeds</h3>
          <p>Our seeds are government-approved and tested for yield, disease resistance, and adaptability to local conditions.</p>
        </div>
      </div>

      <div className="product-category">
        <img src="/images/fertilizer.png" alt="Fertilizers" /> {/* Replace with actual image path */}
        <div className="product-info">
          <h3>Fertilizers</h3>
          <p>We offer both organic and inorganic fertilizers to improve soil health and crop yields.</p>
        </div>
      </div>

      <div className="product-category">
        <img src="/images/tractor.png" alt="Farm Equipment" /> {/* Replace with actual image path */}
        <div className="product-info">
          <h3>Farm Equipment</h3>
          <p>From tractors to irrigation systems, we provide the machinery needed for efficient farming.</p>
        </div>
      </div>

      <div className="product-category">
        <img src="/images/protection.png" alt="Crop Protection Products" /> {/* Replace with actual image path */}
        <div className="product-info">
          <h3>Crop Protection Products</h3>
          <p>Our range of pesticides and herbicides helps protect crops from pests and diseases.</p>
        </div>
      </div>

      <div className="cta">
        <h3>Ready to Boost Your Harvest?</h3>
        <p>Contact us today to learn more about our products and how we can help you succeed in your farming endeavors!</p>
        <a href="#contact"> {/* Anchor link to the Contact section */}
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Products;