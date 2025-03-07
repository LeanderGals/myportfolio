import React from 'react';
import { motion } from 'framer-motion';
import '../css/Education.css';

const Education = () => {
  const educationData = [
    {
      school: "University of Science and Technology of Southern Philippines (USTP)",
      year: "S.Y. 2020 - 2024",
      degree: "Bachelor of Science in Information Technology",
      address: "Claro M. Recto Ave. Lapasan, Cagayan De Oro City, Misamis Oriental"
    },
    {
      school: "Gusa Regional Science High School - X",
      year: "S.Y. 2014 - 2020",
      degree: "Completed Junior and Senior High School",
      address: "Gusa, Cagayan De Oro City, Misamis Oriental"
    },
    {
      school: "Macanhan Elementary School",
      year: "S.Y. 2007 - 2013",
      degree: "Graduated from elementary",
      address: "Macanhan, Cagayan De Oro City, Misamis Oriental"
    },
  ];

  return (
    <section id='education'>
      <div className="containerEduc">
        
        <motion.div 
          className="educText"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} 
        >
          <h1>Educational Background</h1>
          <p>
          My academic journey reflects my strong dedication to continuous learning and personal growth. 
          It demonstrates my persistent pursuit of knowledge and skill enhancement to excel in my chosen field.          </p>
        </motion.div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }} 
            >
              <h3>{item.school}</h3>
              <p><strong>{item.degree}</strong></p>
              <p>{item.year}</p>     
              <p>{item.address}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
