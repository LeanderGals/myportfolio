import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillLogos = {
    "HTML": "/images/html.png",
    "CSS": "/images/css.png",
    "JavaScript": "/images/js.png",
    "React JS": "/images/reactjs.png",
    "React Native": "/images/reactnative.png",
    "Firebase": "/images/firebase.png",
    "Arduino": "/images/arduino.png",
    "Github": "/images/github.png",
    "Figma": "/images/figma.png"
  };

  const skillCategories = [
    { title: "Front-End", skills: ["HTML", "CSS", "JavaScript"] },
    { title: "Framework", skills: ["React JS"] },
    { title: "IoT/Mobile Development", skills: ["React Native", "Firebase", "Arduino"] },
    { title: "Others", skills: ["Github", "Figma"] }
  ];

  return (
    <section id="skills">
      <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        My Skills
      </motion.h1>
      <motion.p
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
         viewport={{ once: false, amount: 0.3 }}
      >
      I am an IT graduate with a passion for creating user-friendly and efficient digital solutions.
      </motion.p>

      <div className="containerSkills">
        
        <div className="skillsList">
          {skillCategories.map((category, index) => (
            <motion.div 
              className="category" 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-buttons">
                {category.skills.map((skill, i) => (
                  <motion.button 
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skillsImg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {hoveredSkill ? (
            <motion.img 
              src={skillLogos[hoveredSkill]} 
              alt={hoveredSkill} 
              className="skill-logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.div 
              className="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
