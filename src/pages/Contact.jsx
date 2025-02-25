import React, { useState } from 'react';
import ContactIcon from '../images/contact.png'
import '../css/Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://myportfolio-3-4me1.onrender.com/send-email', { // Change this to your Render URL
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

  return (
    <section id='contact'>
       <h1>Contact Me</h1>
      <div className="containerContact">
        <div className="contactIcon">
          <img src={ContactIcon} alt="Contact" />
        </div>
        <div className="contactInfo">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
      </div>
      </div>
    </section>
  );
};

export default Contact;
