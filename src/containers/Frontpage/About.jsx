import React from 'react';
import './css/About.css';

const About = () => {
  return(
    <div id="about" className="about">
      <span className="toAppear">
        <p className="text">
          <i className="fas fa-quote-left"></i><br />
          Being a naturally curious guy I <b>enjoy diving into new things</b> and <b>figuring out 
          problems</b> as I stumble upon them.
        </p>
      </span>
      
      <span className="toAppear">
        <p className="text">
          I like to <b>prototype quickly</b> for proof of concept, 
          but am very <b>critical about code</b> I intend to push to production.<br />
          <i className="fas fa-quote-right"></i>
        </p> 
      </span> 
      {/*
      <span className="vertical-line" />
      
      <span className="toAppear">
      <div className="flex-container">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-twitter"></i>

        <div className="about-img"></div>

        <i className="fab fa-github"></i>
        <i className="fas fa-envelope"></i>
        </div>
      </span>
      */} 
    </div>
  )
}

export default About;