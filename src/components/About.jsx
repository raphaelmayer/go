import React from 'react';
import './css/About.css';
import SocialMediaIcons from './SocialMediaIcons';

const About = () => {
  return(
    <div id="about" className="about">
      <div className="about-box">
        <h1>who I am</h1>
        
        <div className="about-float">
          <div className="my-img" style={{ backgroundImage: "url(./images/atti.jpg)" }}></div>
          <SocialMediaIcons />    
        </div>
        
        <article>
          {
            content.map((c, i) => <Paragraph content={ c } />)
          }
        </article>      
      </div>

      <div className="skill-icons-box">
        <i className="skill-icons fab fa-js-square"></i>
        <i className="skill-icons fab fa-react"></i>
        <i className="skill-icons fab fa-node-js"></i>
      </div>
    </div>
    )
}

export default About;

const Paragraph = ({ content }) => {
  return (
    <p><i className="fas fa-angle-left"></i>{ content }<i className="fas fa-angle-right"></i></p>

  );
}

const content = [
  "Hi, my name is Raphael. I'm a fullstack developer based in Innsbruck, Austria. For the past year I have worked as a freelancer building websites and applications for a number of clients, mainly small to midsized businesses.",
  "Being a naturally curious guy I enjoy diving into new things and figuring out problems as I stumble upon them. I like to prototype quickly for proof of concept, but am very critical about code I intend to push to production.",
  "I specialize in everything Javascript, most notably ReactJS and NodeJS, because I enjoy the fast and straight forward development process as well as the modularity of the whole JS ecosystem. Modern Javascript with arrow functions and spread operators mixed with a bit of async/await can really make for beautiful code. :D ",
  "That being said I will make use of other technologies aswell; depending on the project, its requirements and its goals."
];