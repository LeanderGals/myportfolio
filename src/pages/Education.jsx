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
        
        {/* Header Animation */}
        <motion.div 
          className="educText"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} 
        >
          <h1>Educational Background</h1>
          <p>
            My educational background shows my unwavering commitment to lifelong learning and personal development. 
            It attests to my unwavering pursuit of information and skill development in order to excel in my chosen field.
          </p>
        </motion.div>

        {/* Timeline Section (Each item animates separately) */}
        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }} // Triggers animation when at least 30% of element is visible
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
