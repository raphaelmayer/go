import React, { Component } from 'react';
//import content from './content';
import './App.css';

import Nav from './components/Nav';
//import Page from './components/Page';
import Work from './components/Work';
import Work2 from './components/Work2';
import Console from './components/Console';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import { HexGridClear } from './components/Hexagon';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Nav />

                <section id={0} >
                    <HexGridClear color={'#444'} />
                    <h1>mayer.solutions</h1>
                    <Console />
                </section>
    
                <section id={1} >
                    <Services />
                </section>
    
                <section id={2} >
                    <About />
                </section>
    
                <section id={3} >
                    <Work />
                </section>
    
                <section id={4} >
                    <Contact />
                    <HexGridClear margin={{ marginTop: -100 + "px" }} color={'#444'} />
                    <footer className="footer">2018 - designed and built by Raphael Mayer</footer>
                </section>
    
                <section id={5} hidden >
                    <Work2 />
                </section>
            </div>
        );
    }
}

export default App;

