import React from "react";

const Services = () => {
	return (
      <div className="service-box-container"> 
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