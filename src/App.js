import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import NavBarIcon from './components/NavBarIcon';
import Parallax from './components/Parallax';
import LoadingScreen from './components/LoadingScreen';
import Thanks from './containers/Thanks';
import Front from './containers/Front';
import Work from './containers/Work';
import About from './containers/About';
import Contact from './containers/Contact';
import SocialMediaIcons from './components/SocialMediaIcons';
import pulse from './helpers/pulse';
import { HexagonGrid } from './components/Hexagon';
import Overlay from './containers/Overlay';

function isOnScreen(elm) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 200 || rect.top - viewHeight >= -200);
}

class App extends Component {
    constructor() {
        super();
        this.state = { 
            showMobileNav: false,
            overlay: { p: null, visible: false }
        };
        this.handleMobileNav = this.handleMobileNav.bind(this);
        this.handleOverlay = this.handleOverlay.bind(this);
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
        const sections = document.querySelectorAll(".section");
        for (let i=0; i<sections.length; i++) {
            // console.log(sections[i].children)
            if (isOnScreen(sections[i])) {
                sections[i].className = "section appear";
            } else {
                sections[i].className = "section";
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
    handleOverlay(p) {  //overlay
        if (this.state.overlay.visible) {
            this.setState({ overlay: { p: this.state.overlay.p, visible: false } }) 
            document.querySelector("body").className = "";
        } else {
            this.setState({ overlay: { p: p, visible: true } });
            document.querySelector("body").className = "noscroll";
        }
    }
    render() { 
        const { showMobileNav, overlay } = this.state;
        return (
            <div className='App'>
                <LoadingScreen />

                <Thanks />

                <Overlay p={ overlay.p } visible={ overlay.visible } handleOverlay={ this.handleOverlay } />

                { window.innerWidth <= 800 ? <NavBarIcon onClick={ this.handleMobileNav } showMobileNav={ showMobileNav } /> : null }
                { showMobileNav && window.innerWidth <= 800 ? <Nav className="nav nav-active" /> : <Nav className="nav" /> }

                <section id={0} className="section-front" style={{ zIndex: 1, backgroundColor: "rgb(20, 20, 20), transform: none" }}>
                    <Front />
                </section>
    
                <div className="section-bg" style={{ backgroundColor: "rgb(28, 28, 28)" }}>
                <section id={1} className="section" >
                    <About />
                </section>
                </div>
    
				<div className="section-bg" style={{ ackgroundColor: "rgb(28, 28, 28)" }}>
                <section id={3} className="section" >
                    <Work handleOverlay={ this.handleOverlay } />
                </section>
				</div>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(33, 33, 33)" }}>
                <section id={4} className="section" >
                    <Contact />
                    { window.innerWidth <= 1000 ? null : <HexagonGrid margin={{ marginTop: -270 + "px" }} color={'#444'} /> }
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