import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Parallax from './components/Parallax';
import LoadingScreen from './components/LoadingScreen';
import Thanks from './components/Thanks';
import Front from './components/Front';
import Work from './components/Work';
import Console from './components/Console';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import SocialMediaIcons from './components/SocialMediaIcons';
import pulse from './helpers/pulse';
import { HexGridClear } from './components/Hexagon';

function isOnScreen(elm) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 200 || rect.top - viewHeight >= -200);
}

class App extends Component {
    constructor() {
        super();
        this.state = { showMobileNav: false };
        this.handleMobileNav = this.handleMobileNav.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', this.handleScroll);
        setInterval(pulse, 1500);
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e) {
        const sections = document.querySelectorAll("section");
        for (let i=0; i<sections.length; i++) {
            // console.log(sections[i].children)
            if (isOnScreen(sections[i])) {
                sections[i].className += " appear";
            } else {
                sections[i].className = "";
            }
        }
    }
    handleLoad() {
        document.querySelector(".loading-screen").className += " ls-done";
    }
    handleMobileNav() {
        this.state.showMobileNav ? 
        this.setState({ showMobileNav: false }) : 
        this.setState({ showMobileNav: true });
    }
    render() { 
        const { showMobileNav } = this.state;
        return (
            <div className='App'>
                <LoadingScreen />

                <Thanks />

                { window.innerWidth <= 600 ? <i onClick={ this.handleMobileNav } className="fas fa-bars"></i> : null }
                { showMobileNav && window.innerWidth <= 600 ? <Nav className="nav nav-active" /> : <Nav className="nav" /> }

                <section id={0} className="appear " style={{ zIndex: 1, backgroundColor: "rgb(20, 20, 20)" }}>
                   {/* <HexGridClear color={'#444'} /> */}
                    <Front />
                </section>
    
                <div className="section-bg" style={{ backgroundColor: "rgb(28, 28, 28)" }}>
                <section id={1} >
                    <About />
                </section>
                </div>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(33, 33, 33)" }}>
                <section id={2}>
                    <Services />
                </section>
				</div>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(28, 28, 28)" }}>
                <section id={3} >
                    <Work />
                </section>
				</div>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(33, 33, 33)" }}>
                <section id={4} >
                    <Contact />
                    { window.innerWidth <= 1000 ? null : <HexGridClear margin={{ marginTop: -270 + "px" }} color={'#444'} /> }
                    <footer className="footer">
                    2018 - designed and built by Raphael Mayer
                    <SocialMediaIcons />
                    </footer>
                </section>
				</div>
            </div>
        );
    }
}

export default App;