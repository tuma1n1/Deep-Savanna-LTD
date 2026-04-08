import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div className="page about-page page-bg bg-blue">
      <Helmet>
        <title>About Us | Deep Savanna Limited</title>
        <meta
          name="description"
          content="Learn more about Deep Savanna Limited, our mission, vision, leadership, and the team driving excellence in construction, supplies, and agriculture."
        />

        {/* Open Graph (WhatsApp / Facebook preview) */}
        {/* Open Graph (WhatsApp / Facebook preview) */}
        <meta property="og:title" content="Deep Savanna Limited" />
        <meta property="og:description" content="Construction, Equipment, Materials & Agriculture solutions across Kenya." />
        <meta property="og:image" content="/Deep-Savanna-Logo-2-Xbg.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="page ">
        {/* ABOUT INTRO */}
        <section className="about-section">
          <h2>About Deep Savanna Limited</h2>
          <p>
            Deep Savanna Limited is a dynamic and versatile company operating at the
            forefront of the supply of building materials, equipment & machinery,
            construction, and agriculture. With a proven track record of
            excellence, we have established ourselves as a trusted partner in
            delivering sustainable, high-quality solutions that meet the diverse
            needs of our clients.
          </p>

          <p>
            Our services are designed to support infrastructure development,
            enhance access to essential resources, and ensure successful project
            execution through professionalism, innovation, and reliability.
          </p>
        </section>

        {/* CHAIRMAN MESSAGE */}
        <section className="about-section about-dark">
          <h3>Chairman & CEO Message</h3>
          <p>
            At Deep Savanna Limited, we are driven by a passion for excellence and a
            commitment to delivering sustainable solutions in construction, supply
            of equipment and machinery, and agriculture. Our mission is to provide
            high-quality services that meet the unique needs of our clients while
            fostering growth and development in the communities we serve.
          </p>

          <p>
            We take pride in our team’s dedication, professionalism, and ability to
            execute projects with precision and integrity. Together, we strive to
            build lasting partnerships based on trust, innovation, and shared
            success.
          </p>

          <p>
            Thank you for choosing Deep Savanna Limited as your trusted partner. 
            <br></br>
            – Chairman, Deep Savanna Limited
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="about-section mission-vision">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To deliver reliable, high-quality, and cost-effective services while
              fostering trust and long-term partnerships with our clients. We are
              guided by professionalism, innovation, and sustainability in every
              project we undertake.
            </p>
          </div>

          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To be a leading provider of comprehensive solutions in general
              supplies, construction, and agriculture — contributing to economic
              growth and improved livelihoods across Kenya and beyond.
            </p>
          </div>
        </section>

        {/* TEAM */}
        <section className="about-section team-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our strength lies in a team of highly skilled, experienced, and
            dedicated professionals committed to delivering excellence across all
            our operations.
          </p>

          <div className="team-list">

            <div className="team-member">
              <img
                src="/images/team/Abdinasir.png"
                alt="Abdinasir Birre"
                className="team-photo"
              />
              <h4>Abdinasir Birre</h4>
              <span>Chairman & CEO</span>
              <p>
                With valuable proven experience in leadership and strategic growth, 
                the CEO guides the company’s vision and overall direction. 
                He oversees operations and partnerships to ensure the delivery 
                of high-quality services while driving innovation, operational excellence, 
                and sustainable growth.
              </p>
            </div>

            <div className="team-member">
              <img
                src="/images/team/Abdirahman.png"
                alt="Abdirahman Ibrahim"
                className="team-photo"
              />
              <h4>Abdirahman Ibrahim</h4>
              <span>Chief Finance Officer</span>
              <p>
                With a strong focus on financial management and resource
                optimization, the CFO ensures the company’s financial health and
                long-term growth while providing strategic guidance for sustainable
                success.
              </p>
            </div>

            <div className="team-member">
              <img
                src="/images/team/Paul.png"
                alt="Paul Gisiri"
                className="team-photo"
              />
              <h4>Paul Gisiri</h4>
              <span>Director – Procurement & Logistics</span>
              <p>
                A seasoned procurement professional with extensive experience in
                Business Administration and Procurement with more than 14 years in
                the Procurement & Logistics sector.
              </p>
            </div>

            <div className="team-member">
              <img
                src="/images/team/Francis.png"
                alt="Francis Ogot"
                className="team-photo"
              />
              <h4>Francis Ogot</h4>
              <span>Director – Operations</span>
              <p>
                A civil engineer responsible for managing day-to-day operations and
                coordinating departments to ensure project timelines are met.
              </p>
            </div>

            <div className="team-member">
              <img
                src="/images/team/Ruth.png"
                alt="Ruth Ogutu"
                className="team-photo"
              />
              <h4>Ruth Ogutu</h4>
              <span>Head of Administration</span>
              <p>
                A business executive overseeing office operations and coordinating
                departments by providing administrative support for maximum
                efficiency.
              </p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
