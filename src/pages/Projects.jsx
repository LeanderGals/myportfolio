import React from 'react';
import '../css/Projects.css'

const Projects = () => {
  return(
    <section id='projects'>
    <div className="containerProj">
        <h1>Contact Me</h1>
        <div className="contactIcon">

        </div>
        <div className="contactInfo">
            <input className='contactName' type="text" placeholder='Your Name' />
            <input className='contactEmail' type="text" placeholder='Your Email' />
            <input className='contactMessage' type="text" placeholder='Your Message' />
        </div>
    </div>
    </section>
  )
   
};

export default Projects;
