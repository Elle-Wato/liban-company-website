import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Products.css";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000
  };

  const products = [
    {
      title: "SARIS Certified Seeds",
      img: "/images/seed.png",
      alt: "SARIS Certified Seeds",
      description: "Our seeds are government-approved and tested for yield, disease resistance, and adaptability to local conditions. SARIS certification ensures that our seeds meet the highest standards for germination, purity, and performance, giving farmers confidence in their crops.",
      points: [
        "High-Yielding Crop Seeds: Maize, Sorghum, Cowpea, Mung Bean, Sesame, and more.",
        "Vegetable Seeds: Watermelon, Tomato, Onion, Capsicum, Lettuce, Okra, Carrot, Spinach, Pumpkin, and others.",
        "Specialty Seeds: Drought-tolerant and climate-smart seeds tailored to local conditions."
      ]
    },
    {
      title: "Fertilizers",
      img: "/images/fertilizer.png",
      alt: "Fertilizers",
      description: "We offer both organic and inorganic fertilizers to improve soil health and crop yields. Our products include:",
      points: [
        "Organic Fertilizers: Compost and manure-based options.",
        "Inorganic Fertilizers: Urea, DAP, NPK, and other chemical fertilizers for balanced crop nutrition.",
        "Soil Amendments: Lime, gypsum, and other products to improve soil pH and structure."
      ]
    },
    {
      title: "Farm Equipment",
      img: "/images/tractor.png",
      alt: "Farm Equipment",
      description: "From tractors to irrigation systems, we provide the machinery needed for efficient farming. Our offerings include:",
      points: [
        "Tractors, Harvesters, and Planters from leading global brands.",
        "Irrigation Systems: Drip and sprinkler systems for efficient water use.",
        "Hand Tools: Hoes, machetes, shovels, forks, and other essential tools for smallholder farmers.",
        "Post-Harvest Equipment: Hermetic storage bags, grain dryers, and processing tools to reduce post-harvest losses."
      ]
    },
    {
      title: "Crop Protection Products",
      img: "/images/protection.png",
      alt: "Crop Protection Products",
      description: "Our range of pesticides and herbicides helps protect crops from pests and diseases. We offer:",
      points: [
        "Insecticides for effective pest control.",
        "Fungicides to protect crops from fungal diseases.",
        "Herbicides for weed management.",
        "Biopesticides: Eco-friendly alternatives for sustainable farming."
      ]
    }
  ];

  return (
    <div className="products">
      <h2>Our Products</h2>
      <p>
        At Liban Agro-Trading Company, we provide a wide range of high-quality agricultural products to empower farmers and enhance productivity.
      </p>

      <Slider {...settings}>
        {products.map((product, index) => (
          <div className="product-category" key={index}>
            <img src={product.img} alt={product.alt} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <ul>
                {product.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>

      <div className="cta">
        <h3>Ready to Boost Your Harvest?</h3>
        <p>Contact us today to learn more about our products and how we can help you succeed in your farming endeavors!</p>
        <a href="#contact">
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Products;
