import React from 'react';
import { motion } from 'framer-motion';
import AboutIcon from '../images/abouticon2.png';
import '../css/About.css';

const About = () => {
  return (
    <motion.section 
      id='about'
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate into view
      transition={{ duration: 0.7, ease: "easeOut" }} // Smooth effect
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
    >
       <motion.h1 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >About Me</motion.h1>
        
      <div className="aboutContainer">
       
        <motion.div 
          className="aboutMe"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <img src={AboutIcon} alt="About Icon" />
        </motion.div>

        <motion.div 
          className="aboutMeText"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p>
            Hi, I'm <strong>Leander Galasanay</strong>, a recent Bachelor of Science in Information Technology graduate from USTP. 
            I have a passion for web and mobile development and IoT. 
          </p>
          <p>
            Throughout my academic journey, I have worked on projects that blend software and hardware, such as the Clothesline IoT System, which automates clothes protection during rain using smart sensors and a Microalgae Cultivation App that monitors the healthyness of microalgaes. 
            I also developed a campus navigation website for USTP using React JS, enhancing accessibility for students. I thrive on solving complex problems and continuously learning new technologies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
