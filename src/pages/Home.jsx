import React from 'react';
import Mypic from '../images/image 1.png'
import "../css/Home.css"
import Fb from '../images/fb.png'
import Ig from '../images/ig.png'
import X from '../images/x.png'



const Home = () => {
  return (
    <section id='home'>
      <div className="homeContainer">
        <div className='homePicnText'>
          <div className="hometext">
            <div className="nametext">
              <p>Hi there,</p>
              <h1>I'm Leander Galasanay </h1>
              <p>A Front-End Developer based in the Philippines</p>
            </div>
            <div className="cvandsm">
              <div className="socmed">
                <img className="sm" src={Fb} alt="" />
                <img className="sm"src={Ig} alt="" />
                <img className="sm"src={X} alt="" />
              </div>
              <div className="downloadbtn">
                <button>Download CV</button>
              </div>
            </div>
          </div>
          <div className="mypic">
            <img src={Mypic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
