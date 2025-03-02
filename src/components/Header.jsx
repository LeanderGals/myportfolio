import React, { useState, useEffect, useRef } from 'react';
import Logo from '../images/logo.png'; 
import '../css/Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null); 
  const [activeSection, setActiveSection] = useState('home');

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Set active manually when clicked
    }
    setIsNavOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Change active section when 60% of it is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="header">
      <div className="headerContainer">
        <div className="namesite">
          <a className='logoname' href="#home" onClick={() => scrollToSection('home')}>
            <div>
              <img src={Logo} alt="" className="site-logo"/>
            </div>
            <div>
              <p>Leander</p>
              <p>Galasanay</p>
            </div>
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
