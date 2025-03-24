import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const Carousel = () => {
  const slides = [
    {
      image: "/images/image1.png",
      text: "Welcome to Liban Agro-Trading"
    },
    {
      image: "/images/image2.png",
      text: "Empowering Farmers, Cultivating Growth."
    },
    {
      image: "/images/image3.png",
      text: "Liban Agro-Trading Company (LATC) is a leading agro-dealer company based in Somalia, specializing in the supply of high-quality agricultural inputs, machinery, and services to farmers and agribusinesses."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-slide fade">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-text">
          <h1>{slides[currentIndex].text}</h1>
        </div>
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="dots">
        {slides.map((_, index) => (
          <span key={index} className={currentIndex === index ? "dot active" : "dot"} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;