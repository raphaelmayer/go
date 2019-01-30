import React from 'react';
import './css/Head.css';

import StyledButton from "../../components/StyledButton";

const Head = () => {
  const text =  [
    `Hi, my name is <b>Raphael</b>.`,
    `I'm a <b>full</b> <b>stack</b> <b>developer</b> based in <b>Innsbruck,</b> <b>Austria</b>.`,
    `Currently I work as a freelancer building applications and online presences for clients from all around the globe.`
  ];
  
  return (
      <div className="Head" id="Home">
          <header className="banner">
            <NewBannerComp text={ text } />
            <span className="toAppear appearOnLoad">
              <StyledButton scrollTo="Contact" />
            </span>
          </header>
      </div>
  );
}

export default Head;

const OldBannerComp = () => {
  return (
    <p className="text">Hi, my name is <b>Raphael</b>.
      <br />
      I'm a <b>full stack developer</b> based in <b>Innsbruck, Austria</b>.
      <br />
      Currently I work as a freelancer building websites and applications for clients from all parts of the globe.
    </p>
  );
}

// with animation
const NewBannerComp = ({ text }) => {
  return (
    <p className="text">
      {
        text.map((line, i) => {
          return (
            <div className="toAppear appear">
              { line.split(" ").map(word => <span className="appearOnLoad" dangerouslySetInnerHTML={{__html: ` ${word}`}}></span>) }
            </div>
          );
        })
      }
    </p>
  );
}