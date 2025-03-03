import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/Projects.css';

// Import images for each project
import campusNav1 from '../images/logo.png';
import campusNav2 from '../images/logo2.png';
import moveIt1 from '../images/logo1.png';
import moveIt2 from '../images/logo.png';
import iot1 from '../images/php.png';
import iot2 from '../images/iot.png';
import laravel1 from '../images/js.png';
import laravel2 from '../images/ustp.png';

const projectsData = [
  {
    title: "Campus Navigation Website",
    description: "An interactive website for USTP students to navigate campus buildings using an image map. Features a responsive design with dynamic UI interactions.",
    technologies: ["React.js", "CSS", "Image Mapping"],
    images: [campusNav1, campusNav2],
  },
  {
    title: "Move It App Integration",
    description: "A mobile app using Expo for navigation and motorcycle ride services. Improved onboarding screens, button styles, and UI responsiveness.",
    technologies: ["React Native", "Expo", "LottieView"],
    images: [moveIt1, moveIt2],
  },
  {
    title: "IoT Clothesline System",
    description: "An IoT project that automatically retracts clothes when it detects rain, using an ESP32 microcontroller with sensors and Firebase.",
    technologies: ["ESP32", "Arduino", "Firebase", "IoT"],
    images: [iot1, iot2],
  },
  {
    title: "Laravel Web Application",
    description: "A dynamic web app built with Laravel 10, featuring user authentication, database management, and a responsive front-end.",
    technologies: ["Laravel", "PHP", "MySQL"],
    images: [laravel1, laravel2],
  }
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
              {/* Swiper Carousel */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
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
