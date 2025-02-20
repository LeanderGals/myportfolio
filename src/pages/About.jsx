import React from 'react';
import AboutIcon from '../images/abouticon.png';
import '../css/About.css'


const About = () => {
    return(
      <section id='about'>
  <div className="aboutContainer">
    <div className="aboutMe">
        <img src={AboutIcon} alt="" />
    </div>
    <div className="aboutMeText">
        <h1>About Me</h1>
        <p>
        Hi, I'm Leander Galasanay, a recent Bachelor of Science in Information Technology graduate from USTP. 
        I have a passion for web development, IoT, and software engineering. 
        </p>
        <p>Throughout my academic journey, I have worked on projects that blend software and hardware, such as the Clothesline IoT System, which automates clothes protection during rain using smart sensors. 
            I also developed a campus navigation website for USTP using React JS, enhancing accessibility for students. I thrive on solving complex problems and continuously learning new technologies. </p>
    </div>
  </div>
    
  </section>
    )
};

export default About;
