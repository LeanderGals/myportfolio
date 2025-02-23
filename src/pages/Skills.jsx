import React, { useState } from 'react';
import '../css/Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Mapping skills to logos
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

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="containerSkills">
        <div className="skillsList">
          <div className="category">
            <h3>Front-End</h3>
            <div className="skill-buttons">
              {["HTML", "CSS", "JavaScript"].map(skill => (
                <button 
                  key={skill} 
                  onMouseEnter={() => setHoveredSkill(skill)} 
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="category">
            <h3>Framework</h3>
            <div className="skill-buttons">
              <button 
                onMouseEnter={() => setHoveredSkill("React JS")} 
                onMouseLeave={() => setHoveredSkill(null)}
              >
                React JS
              </button>
            </div>
          </div>

          <div className="category">
            <h3>IoT/Mobile Development</h3>
            <div className="skill-buttons">
              {["React Native", "Firebase", "Arduino"].map(skill => (
                <button 
                  key={skill} 
                  onMouseEnter={() => setHoveredSkill(skill)} 
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="category">
            <h3>Others</h3>
            <div className="skill-buttons">
              {["Github", "Figma"].map(skill => (
                <button 
                  key={skill} 
                  onMouseEnter={() => setHoveredSkill(skill)} 
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Logo Display */}
        <div className="skillsImg">
          {hoveredSkill ? (
            <img src={skillLogos[hoveredSkill]} alt={hoveredSkill} className="skill-logo" />
          ) : (
            <div className="placeholder"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
