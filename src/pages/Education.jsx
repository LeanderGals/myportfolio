import React from 'react';
import { motion } from 'framer-motion';
import '../css/Education.css';
import ustp from "../images/ustp.png";
import grshs from "../images/grshs.png";
import mes from "../images/mes.jpg";


const Education = () => {
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
          Throughout my studies, I have embraced challenges and sought opportunities to deepen my understanding, ensuring that I am well-prepared to make meaningful contributions in my field.
          </p>
        </motion.div>

        <div className="timeline">

          <motion.div 
            className="timeline-container-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            > 
          <img src={ustp} />
            <div className="text-box">
              <h2>University of Science and Technology of Southern Philippines (USTP)</h2>
              <p><strong>Bachelor of Science in Information Technology</strong></p>
              <p>S.Y. 2020 - 2024</p>     
              <p>Claro M. Recto Ave. Lapasan, Cagayan De Oro City, Misamis Oriental</p>
              <span className="right-arrow"></span>
              </div>
          </motion.div>

          <motion.div 
            className="timeline-container-left"
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          > 
          <img src={grshs} />
            <div className="text-box">
              <h2>Gusa Regional Science High School - X (GRSHS-X)</h2>
              <p><strong>Completed Junior and Senior High School</strong></p>
              <p>S.Y. 2014 - 2020</p>     
              <p>Gusa, Cagayan De Oro City, Misamis Oriental</p>
              <span className="left-arrow"></span>
              </div>
          </motion.div>


          <motion.div 
            className="timeline-container-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          > 
          <img src={mes} />
            <div className="text-box">
              <h2>Macanhan Elementary School (MES)</h2>
              <p><strong>Graduated from elementary</strong></p>
              <p>S.Y. 2008 - 2014</p>     
              <p>Macanhan, Carmen, Cagayan De Oro City, Misamis Oriental</p>
              <span className="right-arrow"></span>
              </div>
          </motion.div>


        </div>

      </div>
    </section>
  );
};

export default Education;
