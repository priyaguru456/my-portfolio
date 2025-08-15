import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello,
        feel free to reach out. I’ll get back to you as soon as possible.
      </p>

      <div className="contact-info">
        <p><strong>📍 Location:</strong> Bhubaneswar, India</p>
        <p><strong>📧 Email:</strong> priyaguru389@gmail.com</p>
        <p><strong>📞 Phone:</strong> +91 9692343743</p>
      </div>

      <div className="contact-social">
        <a href="https://github.com/priyaguru456" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
        <a href="https://www.linkedin.com/in/priya-guru-817455342" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
