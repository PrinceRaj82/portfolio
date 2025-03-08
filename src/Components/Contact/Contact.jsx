import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";
import { useState } from "react";


export default function Contact() {

    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d3ab8d7d-b082-478b-97f9-56da4cb86977");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Form Submitted Successfully")
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contact" id="contact">
      <div className="Contact_title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact_section">
        <div className="contact_left">
          <h1>Let's talk</h1>
          <p>
            I'm Currently avalibal to take a new project,so feel free to contact{" "}
          </p>
          <div className="contact_details">
            <div className="contact_detail">
                <img src={mail} alt="" />
                <p>Rajkumar.myself@gmail.com</p>
            </div>
            <div className="contact_detail">
                <img src={call} alt="" />
                <p>+91 8228812919</p>
            </div>
            <div className="contact_detail">
                <img src={location} alt="" />
                <p>Giridih,Jharkhand</p>
            </div>
          </div>
        </div>
        <from onSubmit={onSubmit} className="contact_right" netlify >
            <label htmlFor="name">Your Name</label>
            <input type="text" id="full_name" placeholder="Entar your name" name="name"/>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="eamil" placeholder="Enatr you mail"/>
            <label htmlFor="message">Write massage</label>
            <textarea name="message" id="message" rows={8} placeholder="Your message"></textarea>
            <button className="sumbitbtn" >Send</button>
        </from>
      </div>
    </div>
  );
}
