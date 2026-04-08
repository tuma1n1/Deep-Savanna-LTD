import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/images/hero/Hero-1.jpg",
  "/images/hero/Hero-2.jpg",
  "/images/hero/Hero-3.jpg",
  "/images/hero/Hero-4.jpg",
  "/images/hero/Hero-5.jpg",
  "/images/hero/Hero-6.jpg",
  "/images/construction/Construction-5.png",
  "/images/construction/Construction-3.png"
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Background layers */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Building Reliable Solutions <br />
          <span>Across Kenya</span>
        </h1>

        <p>
          Deep Savanna Limited delivers trusted solutions in construction,
          building materials, equipment & machinery, and agriculture — with a
          strong commitment to quality, sustainability, and professionalism.
        </p>

        <div className="hero-buttons">
          <Link to="/about-us" className="btn btn-gold">
            About Us
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
