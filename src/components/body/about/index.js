import React from "react";
import "./about.css";
// import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">Usama Tahir</span>.
         <br /> I have more than One year of experience working with ReactJS as a Frontend Web Developer. 
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture" alt="pikachu"
          />
        </div>
      </div>
      {/* <SocialContact /> */}
    </div>
  );
}

export default About;