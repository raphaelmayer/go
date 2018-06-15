import React from 'react';
import './css/About.css';

const About = () => {
  const style = { 
      background: 'url(../images/atti.jpg)', 
      backgroundPosition: 'center-top', 
      backgroundSize: '140%',
  };
  return(
    <div id="about" className="about">
      <div className="about-box"><h1>who I am</h1>
        <div className="my-img" style={ style }></div>
        <p>Hi, my name is Raphael. I'm a fullstack developer based in Innsbruck, Austria. For the past year I have worked as a freelancer building websites and applications for a number of clients both from online and offline.</p> 
        <p>I specialize in everything Javascript, namely ReactJS, NodeJS and MongoDB, because I enjoy the fast and straight forward development process and flexibility. That being said I will make use of other technologies aswell; depending on the project, its requirements and its goals.</p>
        <p>I am a naturally curious guy perpetually trying to improve his chops.</p>
        
        <div id="expanded" className="expanded-skills">
          <div className="expand-title">Frontend</div>
          <small>HTML5, CSS3, SASS, Bootstrap | Javascript(ES8), ReactJS, D3.js, jQuery</small>
          <div className="expand-title">Backend</div>
          <small>NodeJS, PHP, C | MongoDB, SQL</small>
          <div className="expand-title">Tech</div>
          <small>REST, AJAX, API's, XML, JSON, JWT, oAuth</small>
          <div className="expand-title">Tools</div>
          <small>Other tools I use include but are not limited to:<br />
            <strong>Wordpress</strong>,
            <strong>git</strong> for version control, 
            <strong>Gulp</strong> task runner to automate redundant development steps, 
            <strong>redux</strong> state management for react,
            <strong>Babel</strong> and 
            <strong>Webpack</strong>.
          </small>
        </div>       
      </div>

      <div className="skill-icons-box">
        <i className="skill-icons fab fa-html5"></i>
        <i className="skill-icons fab fa-css3"></i>
        <i className="skill-icons fab fa-js-square"></i>
        <i className="skill-icons fab fa-react"></i>
        <i className="skill-icons fab fa-node-js"></i>
        <i className="skill-icons fab fa-git"></i>
      </div>
    </div>
    )
}

export default About;