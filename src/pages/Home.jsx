import React, { useEffect, useRef } from 'react'; 
import { motion } from 'framer-motion';
import Mypic from '../images/image 1.png';
import "../css/Home.css";
import Fb from '../images/fb.png';
import Ig from '../images/ig.png';
import X from '../images/x.png';

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          typewriterRef.current.classList.remove("typewriter");
          void typewriterRef.current.offsetWidth; 
          typewriterRef.current.classList.add("typewriter");
        }
      },
      { threshold: 0.5 } 
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => observer.disconnect(); 
  }, []);


  return (
    <section id="home">
      <div className="homeContainer">
        <motion.div 
          className="homePicnText"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            className="hometext"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="nametext">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Hi there,
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                 <span ref={typewriterRef} className="typewriter">I'm Leander Galasanay</span>
              </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                A <strong>Front-End Developer</strong> based in the Philippines
              </motion.p>
            </div>

            <div className="cvandsm">
              <motion.div 
                className="downloadbtn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
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
              <div className="socmed">
                <motion.a 
                  href="https://www.facebook.com/leander.galasanay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img className="sm" src={Fb} alt="Facebook" />
                </motion.a>

                <motion.a 
                  href="https://www.instagram.com/le_gals15/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img className="sm" src={Ig} alt="Instagram" />
                </motion.a>

                <motion.a 
                  href="https://x.com/le_gals" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img className="sm" src={X} alt="Twitter/X" />
                </motion.a>
              </div>

              
            </div>
          </motion.div>

          <motion.div 
            className="mypic"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={Mypic} alt="Leander Galasanay" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
