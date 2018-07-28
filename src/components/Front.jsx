import React, { Component } from 'react';
import './css/Front.css';

import smoothScroll from "../helpers/smoothScroll";

import Parallax from "./Parallax";

class Front extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="front">
            	<Parallax />
                <header className="banner">
                	<h1><span className="pulse-anim pulse-anim-1 pulse-anim-2">mayer.raphael</span></h1>
                	<p>Web Developer | Programmer | Designer</p>
                	<button props={ 4 } onClick={ (e) => smoothScroll(e) } className="asd">Hire Now</button>
                </header>
            </div>
        );
    }
}

export default Front;