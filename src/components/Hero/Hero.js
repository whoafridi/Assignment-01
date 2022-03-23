import React from "react";
import "./Hero.css";
import headphone from "../../headphone.png";

const Hero = () => {
  return (
    <>
      <section id="first-section">
        <div className="hero-info">
          <h1 className="hero-text">
            <span className="order">Shout Out,</span>
            <br></br>
            Just Buy Good Products with Us.
          </h1>
          <p className="description">
            Image you don't need have because we provide you good products. We
            give you the best products to you
          </p>
          <br></br>
          <a href="#">
            Order now
          </a>
        </div>
        <div className="hero-info">
          <img src={headphone} alt="hero-section" />
        </div>
      </section>
    </>
  );
};

export default Hero;
