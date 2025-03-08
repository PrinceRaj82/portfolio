import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => alert("Form submitted successfully!"))
      .catch((error) => alert("Error: " + error));
  };

  return (
    <div className="contact" id="contact">
      <div className="Contact_title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="contact_section">
        <div className="contact_left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to contact me.</p>
          <div className="contact_details">
            <div className="contact_detail">
              <img src={mail} alt="Email Icon" />
              <p>Rajkumar.myself@gmail.com</p>
            </div>
            <div className="contact_detail">
              <img src={call} alt="Call Icon" />
              <p>+91 8228812919</p>
            </div>
            <div className="contact_detail">
              <img src={location} alt="Location Icon" />
              <p>Giridih, Jharkhand</p>
            </div>
          </div>
        </div>

        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="contact_right">
          <label htmlFor="name">Your Name</label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="full_name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
          />

          <label htmlFor="email">Your Email</label>
          <input
            onChange={handleChange}
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
          />

          <label htmlFor="message">Write Message</label>
          <textarea
            onChange={handleChange}
            required
            name="message"
            id="message"
            rows={8}
            placeholder="Your message"
            value={formData.message}
          ></textarea>

          <button className="submitbtn" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
