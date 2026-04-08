import React from "react";
import HeroSection from "../components/HeroSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Helmet>
        <title>Deep Savanna Limited | Construction • Supplies • Agriculture</title>
        
        <meta
          name="description"
          content="Deep Savanna Limited delivers reliable construction, building materials, machinery supply, and agriculture solutions across Kenya."
        />
        {/* 🔥 Open Graph (Facebook / WhatsApp) */} 
        <meta property="og:title" content="Deep Savanna Limited" /> 
        <meta 
          property="og:description" 
          content="Construction, Equipment, Materials & Agriculture solutions across Kenya." 
        /> 
        <meta property="og:image" content="/Deep-Savanna-Logo-2-Xbg.png" /> 
        <meta property="og:type" content="website" /> 
        
        {/* 🔥 Twitter */} 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <HeroSection />
      <div className="page page-bg bg-blue">
        <section className="home-intro">
          <div className="home-intro-inner">
            <h2>Who We Are</h2>
            <p>
              Deep Savanna Limited is a dynamic and versatile company operating across
              construction, supply of building materials & machinery, and agriculture.
              With a proven track record of excellence, we deliver sustainable,
              high-quality, and cost-effective solutions to clients across Kenya and
              beyond.
            </p>

            <Link to="/about-us" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>
        </section>


        <section className="services-preview">
          <h2>Our Core Services</h2>

          <div className="services-cards">
            <div className="service-card">
              <img src="/images/materials/Materials-1.jpg" alt="Building Materials" />
              <h3>Supply of Building Materials</h3>
              <p>
                Reliable supply of cement, steel, aggregates, fittings, roofing,
                finishing products and more — delivered on time and within budget.
              </p>
              <Link to="/materials" className="btn btn-gold">
                Learn More
              </Link>
            </div>

            <div className="service-card">
              <img src="/images/equipment/Equipment-1.jpg" alt="Machinery" />
              <h3>Equipment & Machinery</h3>
              <p>
                Heavy machinery, industrial tools, power systems, and agricultural
                equipment sourced from trusted manufacturers.
              </p>
              <Link to="/equipment" className="btn btn-gold">
                Learn More
              </Link>
            </div>

            <div className="service-card">
              <img src="/images/construction/Construction-1.jpg" alt="Construction" />
              <h3>Construction Services</h3>
              <p>
                Residential, commercial, industrial and infrastructure development
                delivered with professionalism, safety and precision.
              </p>
              <Link to="/construction" className="btn btn-gold">
                Learn More
              </Link>
            </div>

            <div className="service-card">
              <img src="/images/agriculture/Crops-3.jpg" alt="Machinery" />
              <h3>Agriculture</h3>
              <p>
                Production or cultivation of sesame, maize and vegetables. 
                Breeding and management of poultry, cattle, goats, and sheep.

              </p>
              <a className="btn btn-gold" href="https://hss-prime-farms-ltd.co.ke/" target="_blank" rel="noreferrer">
                  Learn More
              </a>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}

        <section className="portfolio-section">

          <div className="portfolio-header">
            <h2>Our Portfolio</h2>
            <p>
              A glimpse into the equipment, materials, and infrastructure solutions
              that drive the projects we deliver across Kenya.
            </p>
          </div>

          <div className="portfolio-floating">

            {/* 14 circles */}

            <div className="circle c1"><img src="/images/equipment/Equipment-1.jpg" /></div>
            <div className="circle c2"><img src="/images/equipment/Equipment-2.jpg" /></div>
            <div className="circle c3"><img src="/images/equipment/Equipment-3.jpg" /></div>

            <div className="circle c4"><img src="/images/machinery/Machine-1.jpg" /></div>
            <div className="circle c5"><img src="/images/machinery/Machine-2.jpg" /></div>
            <div className="circle c6"><img src="/images/machinery/Machine-3.jpg" /></div>

            <div className="circle c7"><img src="/images/materials/Materials-1.jpg" /></div>
            <div className="circle c8"><img src="/images/materials/Materials-3.jpg" /></div>
            <div className="circle c9"><img src="/images/materials/Materials-5.jpg" /></div>
            <div className="circle c10"><img src="/images/materials/Materials-7.jpg" /></div>

            <div className="circle c11"><img src="/images/construction/Construction-1.jpg" /></div>
            <div className="circle c12"><img src="/images/construction/Construction-2.jpg" /></div>

            <div className="circle c13"><img src="/images/agriculture/Crops-1.jpg" /></div>
            <div className="circle c14"><img src="/images/agriculture/Crops-3.jpg" /></div>

          </div>


        </section>
      </div>
    </>
  );
}

export default Home;
