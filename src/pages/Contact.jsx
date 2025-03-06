import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactIcon from '../images/contact.png';
import Fb from '../images/fb.png';
import Ig from '../images/ig.png';
import X from '../images/x.png';
import '../css/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://myportfolio-3-4me1.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact">
      <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Contact Me
      </motion.h1>

      <div className="containerContact">
        <motion.div 
          className="contactIcon"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={ContactIcon} alt="Contact" />
        </motion.div>

        <motion.div 
          className="contactInfo"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <form onSubmit={handleSubmit}>
            <motion.input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={handleChange} 
              required
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            />

            <motion.input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={handleChange} 
              required
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            />

            <motion.textarea 
              name="message" 
              placeholder="Your Message" 
              value={form.message} 
              onChange={handleChange} 
              required
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            ></motion.textarea>

            <motion.button 
              type="submit"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Send Message
            </motion.button>
          </form>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: status ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>

          {/* New Section: Message through Social Media */}
          <div className="socialMediaSection">
            <p>Or contact me via my social media accounts.</p>
            <div className="socmed2">
                            <motion.a 
                              href="https://www.facebook.com/leander.galasanay" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <img className="sm2" src={Fb} alt="Facebook" />
                            </motion.a>
            
                            <motion.a 
                              href="https://www.instagram.com/le_gals15/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <img className="sm2" src={Ig} alt="Instagram" />
                            </motion.a>
            
                            <motion.a 
                              href="https://x.com/le_gals" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <img className="sm2" src={X} alt="Twitter/X" />
                            </motion.a>
                          </div>
          </div>

        </motion.div>
      </div>

      {showScrollButton && (
        <button className="scrollToTop" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </section>
  );
};

export default Contact;
