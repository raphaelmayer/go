import React from 'react';
import './css/Services.css';

const Services = () => {
  return( 
      <div> 
        <div className="services-text-box">
          <h1>Services I offer</h1> 
          <p>In my time as a software developer building and maintaining a diverse set of applications I encountered a wide variety of problems and acquired a diverse skillset. I am confident I can add value to your project and help you throughout your development process from conceptualizing prototypes to deploying a finished product.</p>
          <p>I invite you to check out some of the services I offer down below aswell as some of the more recent work I did.</p> 
        </div>
        <div className="serviceBoxes webDes col-lg-2 col-md-3">
          <div className="serviceCircle">
            <img alt="icon" className="icon" src="./icons/browser.png" />
          </div> 
          <div className="serviceTitle">WEBDESIGN</div>
          <div className="serviceBorder"></div>
          <div className="serviceText"><p>Each of my designs begins with a blank canvas which allows your content to guide the layout.</p></div>
        </div>    
        <div className="serviceBoxes webDev col-lg-2 col-md-3">
          <div className="serviceCircle">
            <img alt="icon" className="icon" src="./icons/settings.png" />
          </div>
          <div className="serviceTitle">WEBDEVELOPMENT</div>
          <div className="serviceBorder"></div>
          <div className="serviceText"><p>Custom applications tailored to fit your exact need, built with the newest technologies available.</p></div>
        </div>    
        <div className="serviceBoxes backend col-lg-2 col-md-3">
          <div className="serviceCircle">
            <img alt="icon" className="icon" src="./icons/database.png" />
          </div>
          <div className="serviceTitle">BACK-END SOLUTIONS</div>
          <div className="serviceBorder"></div>
          <div className="serviceText"><p>Database and network solutions for your business to save you time, money and nerves.</p></div>
        </div>    
        <div className="serviceBoxes socialMedia col-lg-2 col-md-3">
          <div className="serviceCircle">
            <img alt="icon" className="icon" src="./icons/users.png" />
          </div>
          <div className="serviceTitle">SOCIAL MEDIA</div>
          <div className="serviceBorder"></div>
          <div className="serviceText"><p>People don't watch TV ads. Get on the next level and start advertising online.</p></div>
        </div>
      </div>
        );
} 
export default Services;