import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png'; 
import '../css/Header.css';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null); 
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false); // Close menu after clicking
  };
  // Close the nav if a click happens outside the nav area
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isNavOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isNavOpen]);

  // Close nav when a link is clicked
  const closeNavOnLinkClick = () => setIsNavOpen(false);

  return (
    <header className="header">
      <div className="headerContainer">
        <div className="namesite">
        <a href="#home" onClick={() => scrollToSection('home')}>
            <img src={Logo} alt="USTP Navigator Logo" className="site-logo"/>
        </a>
        </div>

        <div className="navigation1">
          <button className="navbar-toggle" onClick={toggleNav}>
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
          </button>

          
          <nav ref={navRef} className={`header-nav ${isNavOpen ? 'open' : ''}`}>
          <div className="headernav1">
              <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
              <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
              <a href="#education" onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a>
              <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
              <a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            </div>
            <div className="contactbtn">
              <button onClick={() => scrollToSection('contact')}>Contact Me</button>          
            </div>
          </nav>
          
        </div>
        
      </div>
    </header>
  );
};

export default Header;
