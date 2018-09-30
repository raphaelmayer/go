import React from 'react';
import './css/Services.css';

const Services = () => {
  return( 
      <div> 
        <header className="services-text-box">
          <h1>Services I offer</h1> 
          <article>
            <p>In my time as a software developer building and maintaining a diverse set of applications I encountered a wide variety of problems and was able to acquire a diverse skillset. I can help you throughout your development process from conceptualizing prototypes to deploying a finished product.</p>
            <p>Check out some of the services I offer down below.</p> 
          </article>
        </header>

        {
          content.map((c, i) => <ServiceBox { ...c } key={i} />)
        }
      </div>
        );
} 
export default Services;

const ServiceBox = ({ title, text, icon }) => {
  return (
    <div className="serviceBox webDes">
      <div className="serviceCircle">
        <img alt="icon" className="icon" src={ `./icons/${icon}` } />
      </div> 
      <div className="serviceTitle">{ title }</div>
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