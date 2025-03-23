import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const Carousel = () => {
  const images = ["/images/image1.png", "/images/image2.png", "/images/image3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-slide fade">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="dots">
        {images.map((_, index) => (
          <span key={index} className={currentIndex === index ? "dot active" : "dot"} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
