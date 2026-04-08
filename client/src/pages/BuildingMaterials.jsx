import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";

function BuildingMaterials() {
  return (
    <div className="page service-page page-bg bg-gold">
      <Helmet>
        <title>Building Materials | Deep Savanna Limited</title>
        <meta
          name="description"
          content="Deep Savanna Limited supplies high-quality building materials for residential, commercial, and industrial projects across Kenya."
        />

        {/* Open Graph (WhatsApp / Facebook preview) */}
        <meta property="og:title" content="Deep Savanna Limited" />
        <meta property="og:description" content="Construction, Equipment, Materials & Agriculture solutions across Kenya." />
        <meta property="og:image" content="/Deep-Savanna-Logo-2-Xbg.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="page ">
        {/* INTRO */}
        <section className="service-intro">
          <h2>Supply of Building Materials</h2>
          <p>
            We specialize in the reliable supply of high-quality building materials
            for residential, commercial, and industrial projects. Our materials are
            sourced from trusted manufacturers and delivered on time and within
            budget to support successful project execution.Our products meet local 
            and international standards for safety, durability and performance.
          </p>
        </section>

        {/* MATERIAL CARDS */}
        <section className="service-cards">

          <ServiceCard
            title="Cement & Concrete Products"
            description="High-quality cement and concrete products for foundations, structural works and finishing applications."
            images={[
              "/images/materials/Materials-2.jpg",
              "/images/materials/Materials-3.jpg"
            ]}
          />

          <ServiceCard
            title="Steel Reinforcements"
            description="Durable steel bars and reinforcement materials designed for structural stability and safety."
            images={[
              "/images/materials/Materials-1.jpg",
              "/images/materials/Warehouse-2.png"
            ]}
          />

          <ServiceCard
            title="Bricks, Blocks & Aggregates"
            description="Reliable bricks, sand, gravel and aggregates used in residential and commercial construction."
            images={[
              "/images/materials/Materials-5.jpg",
              "/images/materials/Materials-6.jpg",
              "/images/materials/Materials-11.png"
            ]}
          />

          <ServiceCard
            title="Roofing Materials"
            description="High-quality roofing sheets and materials that provide durability and weather protection."
            images={[
              "/images/materials/Materials-4.jpg",
              "/images/materials/Materials-8.jpg"
            ]}
          />

          <ServiceCard
            title="Finishing Products"
            description="Tiles, paints, fixtures and finishing materials that enhance the final look of completed structures."
            images={[
              "/images/materials/Materials-9.jpg",
              "/images/materials/Materials-10.jpg",
              "/images/materials/Finishing-1.jpg",
              "/images/materials/Finishing-2.jpg"
            ]}
          />

        </section>

        {/* OUTRO */}
        <section className="service-outro">
          <p>
            Our building materials are sourced from trusted manufacturers and
            delivered efficiently to ensure projects are completed on time
            and within budget.
          </p>
        </section>
      </div>
    </div>
  );
}

export default BuildingMaterials;