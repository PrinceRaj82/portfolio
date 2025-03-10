import React from "react";
import "./Hero.css"
import profile_img from "../../assets/Rajkumar.jpg"

export default function Hero(){
    const handleDownload = () => {
        const resumeUrl = "/challenge-design-specs.pdf";
        const a = document.createElement("a");
        a.href = resumeUrl;
        a.download = "Rajkumar_Resume.pdf"; // Set the downloaded file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };

    return (
        <div className="hero" id="hero">
            <img src={profile_img} alt="" class="profile_img" />
            <h1><span>I am Rajkumar,</span> fullstack developer from Giridih</h1>
            <p>I am a self Lern developer i have been Build Many real world project to master this skill.</p>
            <div className="hero-action">
               <a href="#contact"> <div className="hero-connect">Connect With me</div></a>
                <div onClick={handleDownload} className="hero-resume" id="resume">My Resume</div>
            </div>
        </div>
    )
}
