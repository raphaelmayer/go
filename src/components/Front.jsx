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
            	<h1><span className="pulse-anim pulse-anim-1 pulse-anim-2">mayer.solutions</span></h1>
            	<p>Web Developer | Programmer | Designer</p>
            	<button props={ 3 } onClick={ (e) => smoothScroll(e) } className="asd">Featured work</button>
            	<button props={ 4 } onClick={ (e) => smoothScroll(e) } className="asd">Get in Touch</button>
            </div>
        );
    }
}

export default Front;