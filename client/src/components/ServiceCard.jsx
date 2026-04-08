import React, { useState, useEffect } from "react";

function ServiceCard({ title, description, images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="service-card-large">
      <div className="service-card-image">
        {images.map((img, index) => (
          <div
            key={index}
            className={`service-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;