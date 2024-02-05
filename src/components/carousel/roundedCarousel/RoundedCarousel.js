import React, { useState } from "react";
import "./RoundedCarousel.css";

const RoundedCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [showCarouselItems, setShowCarouselItems] = useState([]);
  return (
    <div className="carousel__container">
      <div className="carousel">
        <div className="carousel__item">
          <img src="" alt="" />
          <p>Biriyani</p>
        </div>
      </div>
      <div className="carousel-btn">
        <button className="prev">prev</button>
        <button className="next">next</button>
      </div>
    </div>
  );
};

export default RoundedCarousel;
