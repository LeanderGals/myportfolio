  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import About from './pages/About';
  import Home from './pages/Home';
  import Education from './pages/Education';
  import Skills from './pages/Skills';
  import Projects from './pages/Projects';
  import Contact from './pages/Contact';
  import './App.css'


  function App() {
    return (
      <Router>
          <Header />
          <div className="container">
            <Home />
            <About />
            <Education/>
            <Skills/>
            <Projects/>
            <Contact />
          </div>       
          <Footer />       
      </Router>
    );
  }

  export default App;
