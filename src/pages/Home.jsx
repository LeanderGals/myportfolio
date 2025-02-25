import React from 'react';
import { motion } from 'framer-motion';
import Mypic from '../images/image 1.png';
import "../css/Home.css";
import Fb from '../images/fb.png';
import Ig from '../images/ig.png';
import X from '../images/x.png';

const Home = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="homeContainer">
        <motion.div 
          className="homePicnText"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div 
            className="hometext"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div className="nametext">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                Hi there,
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              >
                I'm Leander Galasanay
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              >
                A Front-End Developer based in the Philippines
              </motion.p>
            </div>

            <div className="cvandsm">
              <div className="socmed">
                <motion.a 
                  href="https://www.facebook.com/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img className="sm" src={Fb} alt="Facebook" />
                </motion.a>

                <motion.a 
                  href="https://www.instagram.com/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img className="sm" src={Ig} alt="Instagram" />
                </motion.a>

                <motion.a 
                  href="https://twitter.com/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img className="sm" src={X} alt="Twitter/X" />
                </motion.a>
              </div>

              <motion.div 
                className="downloadbtn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
              >
                <a href="/LG_resume_2025.pdf" download>
                  <motion.button 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Download CV
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="mypic"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <img src={Mypic} alt="Leander Galasanay" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
