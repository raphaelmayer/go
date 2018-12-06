import React from 'react';
import './css/Head.css';

import StyledButton from "../../components/StyledButton";

const Head = () => {
    return (
        <div className="Head" id="Home">
          <span className="toAppear" id="banner" style={{ display: "flex", margin: "auto" }}>
            <header className="banner">
              <p className="about-L">Hi, my name is <b>Raphael</b>.
                <br />
                I'm a <b>full stack developer</b> based in <b>Innsbruck, Austria</b>.
                <br />
                Currently I work as a freelancer building websites and applications for clients from all parts of the globe.
              </p>

              <StyledButton scrollTo="Contact" />
            </header>
          </span>
        </div>
    );
}

export default Head;