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
          <p>Our seeds are government-approved and tested for yield, disease resistance, and adaptability to local conditions. SARIS certification ensures that our seeds meet the highest standards for germination, purity, and performance, giving farmers confidence in their crops.</p>
          <ul>
            <li>High-Yielding Crop Seeds: Maize, Sorghum, Cowpea, Mung Bean, Sesame, and more.</li>
            <li>Vegetable Seeds: Watermelon, Tomato, Onion, Capsicum, Lettuce, Okra, Carrot, Spinach, Pumpkin, and others.</li>
            <li>Specialty Seeds: Drought-tolerant and climate-smart seeds tailored to local conditions.</li>
          </ul>
        </div>
      </div>

      <div className="product-category">
        <img src="/images/fertilizer.png" alt="Fertilizers" /> {/* Replace with actual image path */}
        <div className="product-info">
          <h3>Fertilizers</h3>
          <p>We offer both organic and inorganic fertilizers to improve soil health and crop yields. Our products include:</p>
          <ul>
            <li>Organic Fertilizers: Compost and manure-based options.</li>
            <li>Inorganic Fertilizers: Urea, DAP, NPK, and other chemical fertilizers for balanced crop nutrition.</li>
            <li>Soil Amendments: Lime, gypsum, and other products to improve soil pH and structure.</li>
          </ul>
        </div>
      </div>

      <div className="product-category">
        <img src="/images/tractor.png" alt="Farm Equipment" /> {/* Replace with actual image path */}
        <div className="product-info">
          <h3>Farm Equipment</h3>
          <p>From tractors to irrigation systems, we provide the machinery needed for efficient farming. Our offerings include:</p>
          <ul>
            <li>Tractors, Harvesters, and Planters from leading global brands.</li>
            <li>Irrigation Systems: Drip and sprinkler systems for efficient water use.</li>
            <li>Hand Tools: Hoes, machetes, shovels, forks, and other essential tools for smallholder farmers.</li>
            <li>Post-Harvest Equipment: Hermetic storage bags, grain dryers, and processing tools to reduce post-harvest losses.</li>
          </ul>
        </div>
      </div>

      <div className="product-category">
        <img src="/images/protection.png" alt="Crop Protection Products" /> {/* Replace with actual image path */}
        <div className="product-info">
          <h3>Crop Protection Products</h3>
          <p>Our range of pesticides and herbicides helps protect crops from pests and diseases. We offer:</p>
          <ul>
            <li>Insecticides for effective pest control.</li>
            <li>Fungicides to protect crops from fungal diseases.</li>
            <li>Herbicides for weed management.</li>
            <li>Biopesticides: Eco-friendly alternatives for sustainable farming.</li>
          </ul>
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