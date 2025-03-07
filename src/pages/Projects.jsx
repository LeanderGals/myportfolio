import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/Projects.css';

import campusNav1 from '../images/ustp1.png';
import campusNav2 from '../images/ustp2.png';
import cloth1 from '../images/cloth1.png';
import cloth2 from '../images/cloth2.png';
import cloth3 from '../images/cloth3.png';
import cloth4 from '../images/cloth4.png';
import algae1 from '../images/algae1.png';
import algae2 from '../images/algae2.png';
import algae3 from '../images/algae3.png';


const projectsData = [
 
  {
    title: "Clothesline App",
    description: "The Clothesline App is a smart IoT solution that detects rain using sensors and automatically adjusts the clothesline to keep clothes dry. It integrates with Firebase for real-time updates and remote control, making laundry care more convenient and efficient.",
    technologies: ["React Native", "Firebase", "Arduino", "OpenWeatherMap API", "ESP32", "IoT Sensors"],
    images: [cloth1, cloth2, cloth3, cloth4],
  },
  {
    title: "USTP Map Navigation",
    description: "The USTP Map Nav is a React-based navigation system designed to help users explore the USTP campus. It features an interactive campus map with building-specific images and responsive buttons for easy navigation.",
    technologies: ["React JS", "Image Mapping"],
    images: [campusNav1, campusNav2],
  },
  {
    title: "LUMOTech App",
    description: "LUMOtech is a microalgae monitoring app designed to track algae growth in real time. It utilizes IoT sensors and data visualization to provide accurate monitoring, helping researchers and aquaculture industries maintain optimal conditions for algae cultivation. ",
    technologies: ["React Native", "ESP 8266", "Arduino", "Websocket", "IoT Sensors"],
    images: [algae1, algae2, algae3],
  },

];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id='projects' ref={ref}>
      <motion.div 
        className="containerProj"
              >
        <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        >My Projects</motion.h1>
        <div className="projectsGrid">
          {projectsData.map((project, index) => (
            <motion.div 
              className="projectCard" 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="projectSwiper"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`${project.title} slide ${i + 1}`} className="projectImage" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="techStack">
                {project.technologies.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="techBadge"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
