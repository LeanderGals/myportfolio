import React from 'react';
import { motion } from 'framer-motion';
import AboutIcon from '../images/abouticon.png';
import '../css/About.css';

const About = () => {
  return (
    <motion.section 
      id='about'
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate into view
      transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
    >
      <div className="aboutContainer">
        <motion.div 
          className="aboutMe"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img src={AboutIcon} alt="About Icon" />
        </motion.div>

        <motion.div 
          className="aboutMeText"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h1>About Me</h1>
          <p>
            Hi, I'm Leander Galasanay, a recent Bachelor of Science in Information Technology graduate from USTP. 
            I have a passion for web development, IoT, and software engineering. 
          </p>
          <p>
            Throughout my academic journey, I have worked on projects that blend software and hardware, such as the Clothesline IoT System, which automates clothes protection during rain using smart sensors. 
            I also developed a campus navigation website for USTP using React JS, enhancing accessibility for students. I thrive on solving complex problems and continuously learning new technologies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
