import React, { Component } from 'react';
import './App.css';
import './darkmode.css';

import Frontpage from "./containers/Frontpage/Frontpage";

import Nav from './components/Nav';
import NavBarIcon from './components/NavBarIcon';
import LoadingScreen from './components/LoadingScreen';
import Overlay from "./components/Overlay";
import Parallax from "./components/Parallax";

import throttle from "./helpers/throttle";


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
            overlay: { p: null, visible: false },
            themeMode: "dark"
        };
        this.handleMobileNav = this.handleMobileNav.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleOverlay = this.handleOverlay.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }
    componentDidMount() {
        setTimeout(() => document.querySelector(".loading-bar").className += " loading-bar60", 50);
        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', throttle(this.handleScroll, 50));
        // check themeMode localStorage
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e) {  
        const sections = document.querySelectorAll(".toAppear"); // sections to appear
        
        window.scrollY >= 100 ? this.setState({ navColor: true }) : this.setState({ navColor: false });
        
        // appear animation
        for (let i=0; i<sections.length; i++) {
            if (isOnScreen(sections[i])) {
                sections[i].className = "toAppear appear";
            } else {
                sections[i].className = "toAppear";
            }
        }
    }
    handleLoad() {  
        // really bad lol
        // remove loadingscreen
        document.querySelector(".loading-bar").className += " loading-bar100";
        setTimeout(() => document.querySelector(".loading-screen").className += " ls-done", 200);
        
        // make bannertext appear
        const bannertext = document.querySelectorAll(".appearOnLoad");
        console.log(bannertext)
        bannertext.forEach((el, i) => {
            el && setTimeout(() => el.className += " appear", 30*i);
        })
        
    }
    handleMobileNav() {
        this.state.showMobileNav ? 
        this.setState({ showMobileNav: false }) : 
        this.setState({ showMobileNav: true });
    }
    handleOverlay(p) {
        if (this.state.overlay.visible) {
            this.setState({ overlay: { p: this.state.overlay.p, visible: false } }) 
            document.querySelector("body").className = "";
        } else {
            this.setState({ overlay: { p: p, visible: true } });
            document.querySelector("body").className = "noscroll";
        }
    }
    toggleDarkMode(e) {
        // const themeMode = localStorage.setItem();
        const themeMode = this.state.themeMode === "dark" ? "light" : "dark";
        this.setState({ themeMode });
    }
    render() { 
        const { showMobileNav, navColor, overlay, themeMode } = this.state;
        return (
            <div className={ "App " + themeMode }>
                <LoadingScreen />
                <Overlay p={ overlay.p } visible={ overlay.visible } handleOverlay={ this.handleOverlay } themeMode={ themeMode } />
                <Parallax themeMode={ themeMode } />
                
                { window.innerWidth <= 800 ? 
                    <NavBarIcon 
                        onClick={ this.handleMobileNav } 
                        transform={ showMobileNav } /> 
                  : null }
                { showMobileNav && window.innerWidth <= 800 ? 
                    <Nav className="nav nav-active" handleMobileNav={ this.handleMobileNav } themeMode={ themeMode } toggleDarkMode={ this.toggleDarkMode } />
                  : <Nav className="nav" bg={ navColor } handleMobileNav={ this.handleMobileNav } themeMode={ themeMode } toggleDarkMode={ this.toggleDarkMode } /> }

                <Frontpage handleOverlay={ this.handleOverlay } isHidden={ overlay.visible } themeMode={ themeMode} />
            </div>
        );
    }
}

export default App;