import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";

function EquipmentAndMachinery() {
  return (
    <div className="page service-page page-bg bg-gold">
      <Helmet>
        <title>Equipment & Machinery | Deep Savanna Limited</title>
        <meta
          name="description"
          content="Deep Savanna Limited supplies reliable construction, industrial, and agricultural equipment and machinery across Kenya."
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
          <h2>Equipment & Machinery Supply</h2>
          <p>
            Deep Savanna Limited supplies a wide range of reliable equipment and
            machinery for construction, industrial, and agricultural applications.
            Our portfolio includes heavy machinery, tools, and power systems
            sourced from trusted manufacturers to ensure durability, efficiency,
            and long-term performance.
          </p>
        </section>

        {/* SERVICE CARDS */}
        <section className="service-cards">

          <ServiceCard
            title="Heavy Construction Machinery"
            description="Excavators, bulldozers and loaders designed to handle demanding infrastructure and construction projects."
            images={[
              "/images/machinery/Machine-1.jpg",
              "/images/machinery/Machine-2.jpg",
              "/images/machinery/Machine-3.jpg",          
              "/images/machinery/Machine-6.jpg",
            ]}
          />

          <ServiceCard
            title="Power Tools & Construction Equipment"
            description="Professional-grade construction tools and hardware that support efficient and precise project execution."
            images={[
              "/images/equipment/Equipment-1.jpg",
              "/images/equipment/Equipment-3.jpg",
              "/images/equipment/Equipment-2.jpg",
              "/images/equipment/Equipment-5.jpg"
            ]}
          />

          <ServiceCard
            title="Generators & Compressors"
            description="Reliable power generation and air compression systems suitable for construction sites and industrial operations."
            images={[
              "/images/equipment/Generator-2.jpg",
              "/images/equipment/Compressor-2.jpg",
              "/images/equipment/Equipment-4.jpg"
            ]}
          />

          <ServiceCard
            title="Agricultural & Irrigation Equipment"
            description="Modern irrigation systems and agricultural machinery designed to improve productivity and support sustainable farming."
            images={[
              "/images/agriculture/Irrigation-1.webp",
              "/images/agriculture/Irrigation-2.jpg",
              "/images/agriculture/Irrigation-3.jpg"
            ]}
          />

        </section>

        {/* OUTRO */}
        <section className="service-outro">
          <p>
            We guarantee transparent pricing, expert sourcing support and timely
            delivery — ensuring your operations run smoothly and efficiently.
          </p>
        </section>
      </div>
    </div>
  );
}

export default EquipmentAndMachinery;