import React from 'react';
import './css/About.css';
import SocialMediaIcons from '../components/SocialMediaIcons';

const About = () => {
  return(
    <div id="about" className="about">

      <div className="about-box">
        <h1>who I am</h1>
        
        <div className="about-float">
          <div className="my-img" style={{ backgroundImage: "url(./images/atti.jpg)" }}></div>
          <SocialMediaIcons />    
        </div>
        <p className="about-L">Hi, my name is <b>Raphael</b>.
          <br/>
          I'm a <b>fullstack developer</b> based in <b>Innsbruck, Austria</b>.
        </p>
        <p className="about-S">
          Currently I work as a contractor building websites and applications for clients from all around the globe.
        </p>
        
        <p className="about-S">
          Being a naturally curious guy I enjoy diving into new things and figuring out 
          problems as I stumble upon them. I like to prototype quickly for proof of concept, 
          but am very critical about code I intend to push to production.
        </p>  
      </div>

      <div className="about-service-container"> 
      {
        content2.map((c, i) => <ServiceBox { ...c } key={i} />)
      }
      </div>
    </div>
    )
}

export default About;

const Paragraph = ({ content }) => {
  return (
    <p className="about-S"><i className="fas fa-angle-left"></i> { content } <i className="fas fa-angle-right"></i></p>

  );
}

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

const content2 = [
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