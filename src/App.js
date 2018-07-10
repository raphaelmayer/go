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
import pulse from './helpers/pulse';
import { HexGridClear } from './components/Hexagon';

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 200 || rect.top - viewHeight >= -200);
}

class App extends Component {
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
            if (checkVisible(sections[i])) {
                sections[i].className += " appear";
            } else {
                sections[i].className = "";
            }
        }
    }
    handleLoad() {
        document.querySelector(".loading-screen").className += " ls-done";
    }
    render() { 
        return (
            <div className='App'>
                <LoadingScreen />

                <Thanks />

                <Nav />

                <section id={0} className="appear " style={{ zIndex: 1, backgroundColor: "rgb(30, 30, 30)" }}>
                   {/* <HexGridClear color={'#444'} /> */}
                    <Front />
                </section>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(35, 35, 35)" }}>
                <section id={1}>
                    <Services />
                </section>
				</div>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(30, 30, 30)" }}>
                <section id={2} >
                    <About />
                </section>
				</div>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(35, 35, 35)" }}>
                <section id={3} >
                    <Work />
                </section>
				</div>
    
				<div className="section-bg" style={{ backgroundColor: "rgb(30, 30, 30)" }}>
                <section id={4} >
                    <Contact />
                    <HexGridClear margin={{ marginTop: -180 + "px" }} color={'#444'} />
                    <footer className="footer">2018 - designed and built by Raphael Mayer</footer>
                </section>
				</div>
            </div>
        );
    }
}

export default App;