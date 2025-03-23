import React from "react";
//import "./Contact.css"; // Optional: Create a separate CSS file for Contact styles

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible.</p>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        
        <label>Email:</label>
        <input type="email" name="email" required />
        
        <label>Phone:</label>
        <input type="tel" name="phone" required />
        
        <label>Subject:</label>
        <input type="text" name="subject" required />
        
        <label>Message:</label>
        <textarea name="message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: liiban.trading@gmail.com</p>
        <p>Phone: +252 611 273 333</p>
        <p>Address: Bakaro Market, Mogadishu, Somalia</p>
      </div>
    </div>
  );
};

export default Contact;