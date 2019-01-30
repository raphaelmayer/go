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
            <Banner text={ text } />
            <span className="toAppear appearOnLoad">
              <StyledButton scrollTo="Contact" />
            </span>
          </header>
      </div>
  );
}

export default Head;

const Banner = ({ text }) => {
  return (
    <div className="banner">
      {
        text.map((line, i) => {
          return (
            <p className="toAppear appear" key={i}>
              { /* margin between Austria and Currently */ 
                i === 2 && <div style={{ margin: "6px" }} />
              }
              { line.split(" ").map((word, i) => <span className="appearOnLoad" dangerouslySetInnerHTML={{__html: ` ${word}`}} key={i}></span>) }
            </p>
          );
        })
      }
    </div>
  );
}