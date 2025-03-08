import React  from "react";
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.svg"

export default function About(){
    return(
        <div className="about" id="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
            <div className="about-right">
                <div className="about_para">
                    <p>I am a Full stack developer with complext problem solver.</p>
                    <p>My passion about creating web apps that help business to grow them</p>
                </div>
                <div className="about_skills">
                    <div className="About_skill">
                        <p>HTML & CSS </p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="About_skill">
                        <p>React Js</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="About_skill">
                        <p>Java Script</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="About_skill">
                        <p>Node js</p>
                        <hr style={{width:"40%"}}/>
                    </div>
                </div>
            </div>
            </div>
            <div className="about_achivements">
                <div className="about_achivement">
                    <h1>10+</h1>
                    <p>Year of exprincess</p>
                </div>
                <hr/>
                <div className="about_achivement">
                    <h1>90+</h1>
                    <p>Project Ceated</p>
                </div>
                <hr/>
                <div className="about_achivement">
                    <h1>15+</h1>
                    <p>Clone</p>
                </div>
            </div>
        </div>
    )
}