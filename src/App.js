import React, { Component } from 'react';
import './App.css';

import Frontpage from "./containers/Frontpage/Frontpage";

import Nav from './components/Nav';
import NavBarIcon from './components/NavBarIcon';
import LoadingScreen from './components/LoadingScreen';
import SocialMediaIcons from './components/SocialMediaIcons';
import { HexagonGrid } from './components/Hexagon';
import Overlay from "./components/Overlay";

import pulse from './helpers/pulse';
import throttle from "./helpers/throttle";

// test
import Parallax from "./components/Parallax";


function isOnScreen(elm) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 100 || rect.top - viewHeight >= -100);
}

class App extends Component {
    constructor() {
        super();
        this.state = { 
            showMobileNav: false,
            navColor: false,
            overlay: { p: null, visible: false }
        };
        this.handleMobileNav = this.handleMobileNav.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleOverlay = this.handleOverlay.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', throttle(this.handleScroll, 50));
        // setInterval(pulse, 1500);
        const banner = document.getElementById("banner");
        banner && setTimeout(() => banner.className += " appear", 50);
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e) {  
        const sections = document.querySelectorAll(".toAppear"); // sections to appear
        
        window.scrollY >= 100 ? this.setState({ navColor: true }) : this.setState({ navColor: false });
        
        for (let i=0; i<sections.length; i++) {
            if (isOnScreen(sections[i])) {
                sections[i].className = "toAppear appear";
            } else {
                sections[i].className = "toAppear";
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
        console.log("handleOverlay")
        if (this.state.overlay.visible) {
            this.setState({ overlay: { p: this.state.overlay.p, visible: false } }) 
            document.querySelector("body").className = "";
        } else {
            this.setState({ overlay: { p: p, visible: true } });
            document.querySelector("body").className = "noscroll";
        }
    }
    render() { 
        const { showMobileNav, navColor, overlay } = this.state;
        return (
            <div className='App'>
                <LoadingScreen />
                <Overlay p={ overlay.p } visible={ overlay.visible } handleOverlay={ this.handleOverlay } />
                <Parallax />
                { window.innerWidth <= 600 ? <NavBarIcon onClick={ this.handleMobileNav } transform={ showMobileNav } /> : null }
                { showMobileNav && window.innerWidth <= 800 ? 
                    <Nav className="nav nav-active" handleMobileNav={ this.handleMobileNav } />
                  : <Nav className="nav" bg={ navColor } handleMobileNav={ this.handleMobileNav } /> }

                <Frontpage handleOverlay={ this.handleOverlay } />
            </div>
        );
    }
}

export default App;