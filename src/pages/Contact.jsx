import React from 'react';
import '../css/Contact.css'

const Contact = () => {
  return(
    <section id='contact'>
    <div className="containerContact">
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

export default Contact;
