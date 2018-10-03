import React from 'react';
import './css/Front.css';

import smoothScroll from "../helpers/smoothScroll";

import Parallax from "../components/Parallax";

const Front = () => {
    return (
        <div className="front">
            <header className="banner">
            	<h1><span className="pulse-anim pulse-anim-1 pulse-anim-2">raphael.mayer</span></h1>
            	<p>Web Developer | Programmer | Designer</p>
            	<button props={ 3 } onClick={ (e) => smoothScroll(e) } className="asd">Hire Now</button>
            </header>
            <Parallax />
        </div>
    );
}

export default Front;