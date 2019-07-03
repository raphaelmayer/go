import React from 'react';
import './css/About.css';

const About = ({ themeMode }) => {
  return(
    <div id="about" className={ "about " + themeMode }>
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
    </div>
  )
}

export default About;