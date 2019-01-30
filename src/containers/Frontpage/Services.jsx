import React from "react";
import "./css/Services.css";

const Services = () => {
	return (
      <div className="Services"> 
        <span className="toAppear">
          <h1>Services</h1>
        </span>
        <div className="service-box-container">
          {
            content.map((c, i) => <ServiceBox { ...c } i={i} key={i} />)
          }
        </div>
      </div>
	);
}

export default Services;

const ServiceBox = ({ title, text, icon, i }) => {
  return (
    <span className="toAppear">
    <div className={`ServiceBox ${ i % 2 === 0 ? "left" : ""}`}>
      <i className={`icon ${icon}`}></i>
      <h3 className="title">{ title }</h3>
      <div className="service-border"></div>
      <p className="text">{ text }</p>
    </div>
    </span>
  );
}

const content = [
  {
    title: "Web Design",
    text: "Each of my designs begins with a blank canvas which allows your content to guide the layout.",
    iicon: "browser.png",
    icon: "fas fa-desktop"   
  },
  {
    title: "Web Development",
    text: "Custom applications tailored to fit your exact need, built with the newest technologies available.",
    iicon: "settings.png",
    icon: "fas fa-cog"  
  },
  /*{
    title: "Back-End Solutions",
    text: "Database and network solutions for your business to save you time, money and nerves.",
    iicon: "database.png",
    icon: "fas fa-server"   
  },*/
  {
    title: "Online Marketing & SEO",
    text: "People don't watch TV ads. Get on the next level and start advertising online.",
    iicon: "users.png",
    icon: "fas fa-users"  
  },
]