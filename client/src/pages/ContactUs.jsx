import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <div className="page contact-page page-bg bg-blue">
      <Helmet>
        <title>Contact Us | Deep Savanna Limited</title>
        <meta
          name="description"
          content="Get in touch with Deep Savanna Limited for construction, supplies, machinery, and agriculture solutions across Kenya."
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
        <section className="contact-intro">
          <h2>Get in Touch</h2>
          <p>
            Whether you have an inquiry, need a quotation, or would like to partner
            with us, our team is ready to assist you.
          </p>
        </section>

        <section className="contact-wrapper">
          <div className="contact-card">
            <h3>Contact Information</h3>

            <p>
              <strong>Head Office:</strong><br />
              Chai House, 6th Floor, Koinange Street, Nairobi
            </p>

            <p>
              <strong>Postal Address:</strong><br />
              P.O. Box 3030-00100, Nairobi, Kenya
            </p>

            <p>
              <strong>Phone:</strong><br />
              <a
                href="https://wa.me/254707242632"
                target="_blank"
                rel="noopener noreferrer"
              >
                +254707242632 (WhatsApp)
              </a>
            </p>

            <p>
              <strong>Email:</strong><br />
              deepsavanna123@gmail.com
            </p>

            <p>
              <strong>Working Hours:</strong><br />
              Monday – Friday: 8:00 AM – 5:00 PM<br />
              Saturday: 9:00 AM – 1:00 PM
            </p>
          </div>

          <form 
            className="contact-form"
            action="https://formspree.io/f/xlgpjnao"
            method="POST"
          >
            <h3>Send Us a Message</h3>

            <input 
              type="text"
              name="name" 
              placeholder="Your Name" 
              required 
            />
            <input 
              type="email"
              name="email" 
              placeholder="Your Email" 
              required 
            />
            <input 
              type="hidden"
              name="_subject"
              value="New message from Deep Savanna website" 
            />

            <textarea
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              required
            ></textarea>

            <button type="submit" className="btn btn-gold">
              Submit Message
            </button>

          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
