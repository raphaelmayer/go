import React from 'react';
import './css/About.css';

const About = () => {
  const style = { 
      background: 'url(./images/atti.jpg)', 
      backgroundPosition: 'center-top', 
      backgroundSize: '140%',
  };
  return(
    <div id="about" className="about">
      <div className="about-box"><h1>who I am</h1>
        <div className="my-img" style={ style }></div>
        
        <p><i className="fas fa-angle-left"></i> Hi, my name is Raphael. I'm a fullstack developer based in Innsbruck, Austria. 
        For the past year I have worked as a freelancer building websites and applications for a number of clients, mainly small to midsized businesses. <i className="fas fa-angle-right"></i></p>

        <p><i className="fas fa-angle-left"></i> Being a naturally curious guy I enjoy diving into new things and figuring out problems as I stumble upon them. 
        I like to prototype quickly for proof of concept, but am very critical about code I intend to push to production. <i className="fas fa-angle-right"></i></p>

        <p><i className="fas fa-angle-left"></i> I specialize in everything Javascript, most notably ReactJS and NodeJS, because I enjoy the fast and straight forward development process as well as the modularity of the whole JS ecosystem. 
        Modern Javascript with arrow functions and spread operators mixed with a bit of async/await can really make for beautiful and readable code! <i className="fas fa-angle-right"></i></p>
        
        <p><i className="fas fa-angle-left"></i> That being said I will make use of other technologies aswell; depending on the project, its requirements and its goals. <i className="fas fa-angle-right"></i></p>
        
        <div id="expanded" className="expanded-skills">
          <div className="expand-title">Frontend</div>
          <small>HTML5, CSS3, SASS, Bootstrap | Javascript(ES8), ReactJS, D3.js, jQuery</small>
          <div className="expand-title">Backend</div>
          <small>NodeJS, PHP, C | MongoDB, SQL</small>
          <div className="expand-title">Tools</div>
          <small>Other tools I use include but are not limited to:<br />
            Wordpress,
            Git(hub),
            Gulp, 
            Redux,
            Babel,
            Webpack.
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