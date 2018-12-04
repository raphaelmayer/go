import React from 'react';
import './css/About.css';
import SocialMediaIcons from '../../components/SocialMediaIcons';

const About = () => {
  return(
    <div id="about" className="about">
      <span className="toAppear">
        <p className="about-S">
          <i className="fas fa-quote-left"></i><br />
          Being a naturally curious guy I <b>enjoy diving into new things</b> and <b>figuring out 
          problems</b> as I stumble upon them.
        </p>
      </span>
      
      <span className="toAppear">
        <p className="about-S">
          I like to <b>prototype quickly</b> for proof of concept, 
          but am very <b>critical about code</b> I intend to push to production.<br />
          <i className="fas fa-quote-right"></i>
        </p> 
      </span> 

      <div className="about-service-container"> 
        {
          content.map((c, i) => <ServiceBox { ...c } key={i} />)
        }
      </div>
    </div>
  )
}

export default About;

const ServiceBox = ({ title, text, icon }) => {
  return (
    <div className="serviceBox webDes">
      <div className="serviceCircle">
        <img alt="icon" className="icon" src={ `./icons/${icon}` } />
      </div> 
      <h3 className="serviceTitle">{ title }</h3>
      <div className="serviceBorder"></div>
      <div className="serviceText"><p>{ text }</p></div>
    </div>
  );
}

const content = [
  {
    title: "WEBDESIGN",
    text: "Each of my designs begins with a blank canvas which allows your content to guide the layout.",
    icon: "browser.png"   
  },
  {
    title: "WEBDEVELOPMENT",
    text: "Custom applications tailored to fit your exact need, built with the newest technologies available.",
    icon: "settings.png"   
  },
  {
    title: "BACK-END SOLUTIONS",
    text: "Database and network solutions for your business to save you time, money and nerves.",
    icon: "database.png"   
  },
  {
    title: "SOCIAL MEDIA",
    text: "People don't watch TV ads. Get on the next level and start advertising online.",
    icon: "users.png"   
  },
]