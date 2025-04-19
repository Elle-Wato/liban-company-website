import React from "react";
//import './Contact.css'; // Assuming you have a CSS file for styles

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        We’d love to hear from you! Reach out through any of the options below.
      </p>

      <div className="contact-info">
        <h3 className="info-title">Contact Information</h3>

        <p className="info-item">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@libanagrotradingcompany.com" className="info-link">
            info@libanagrotradingcompany.com
          </a>
        </p>

        <p className="info-item">
          <strong>Phone:</strong>{" "}
          <a href="tel:+252611273333" className="info-link">+252 611 273 333</a>
        </p>

        <p className="info-item">
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/252611273333"
            target="_blank"
            rel="noopener noreferrer"
            className="info-link"
          >
            Chat with us
          </a>
        </p>

        <p className="info-item">
          <strong>Address:</strong> Bakaro Market, Mogadishu, Somalia
        </p>

        {/* Embedded Google Map */}
        <div className="map-container">
          <h3>Our Location</h3>
          <iframe
            title="Bakaro Market Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.271328920867!2d45.31631957423728!3d2.0473774589384024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d584241bb03392b%3A0x94d78ca7967b47dc!2sBakaara%20Market!5e0!3m2!1sen!2ske!4v1745076055428!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;