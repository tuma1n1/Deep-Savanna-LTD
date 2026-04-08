import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";

function Construction() {
  return (
    <div className="page service-page page-bg bg-gold">
      <Helmet>
        <title>Construction Services | Deep Savanna Limited</title>
        <meta
          name="description"
          content="Deep Savanna Limited delivers professional residential, commercial, industrial, and infrastructure construction services across Kenya."
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
          <h2>Construction Services</h2>
          <p>
            Deep Savanna Limited provides end-to-end construction services across
            residential, commercial, industrial, and infrastructure sectors. We
            combine modern engineering practices, skilled professionals, and
            strict safety standards to deliver durable and functional structures.
          </p>
        </section>

        {/* SERVICE CARDS */}
        <section className="service-cards">

          <ServiceCard
            title="Residential Construction"
            description="Construction of modern residential homes and multi-unit developments designed for durability and comfort."
            images={[
              "/images/construction/Construction-1.jpg",
              "/images/construction/Construction-4.png"
            ]}
          />

          <ServiceCard
            title="Commercial & Industrial Projects"
            description="Development of offices, warehouses and industrial facilities built to support business operations."
            images={[
              "/images/construction/Construction-2.jpg",
              "/images/construction/Construction-5.png"
            ]}
          />

          <ServiceCard
            title="Infrastructure Development"
            description="Execution of infrastructure projects including roads, drainage systems and public works."
            images={[
              "/images/construction/Construction-8.jpg",
              "/images/construction/Construction-9.jpg"
            ]}
          />

          <ServiceCard
            title="Renovations & Remodeling"
            description="Upgrading, remodeling and repairing structures to improve functionality and aesthetics."
            images={[
              "/images/construction/Renovation-1.jpg",
              "/images/construction/Renovation-2.jpg",
              "/images/construction/Renovation-3.jpg"
            ]}
          />

        </section>

        {/* OUTRO */}
        <section className="service-outro">
          <p>
            Our construction projects are delivered with strict safety compliance,
            experienced professionals and attention to every structural detail.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Construction;