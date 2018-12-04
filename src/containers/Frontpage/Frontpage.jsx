import React, { Component } from "react";

import Head from './Head';
import FeaturedWork from './FeaturedWork';
import About from './About';
import Work from "./Work";
import Contact from './Contact';
import { HexagonGrid } from '../../components/Hexagon';
import SocialMediaIcons from '../../components/SocialMediaIcons';

import projects from "../../projects";

class Frontpage extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	componentDidMount() {
		const banner = document.getElementById("banner");
		banner && setTimeout(() => banner.className += " appear", 50);
	}
	render() {
		const { handleOverlay } = this.props;
	    return (
	        <div className="FrontPage">

	            <div>
	                <Head />
	    		</div>
	    		
	            <div className="section-bg" style={{ backgroundColor: "rgb(28, 28, 28)" }} >
	            	<Work handleOverlay={ handleOverlay } />
	            </div>
	    
	            <div className="section-bg" style={{ backgroundColor: "rgb(33, 33, 33)" }}>
	                <About />
	            </div>
	    
	            <div className="section-bg" style={{ backgroundColor: "rgb(28, 28, 28)" }}>
	                {/* <Blog /> */}
	            </div>

	            <div className="section-bg" style={{ backgroundColor: "rgb(28, 28, 28)", overflow: "hidden" }}>
	                <Contact />
	                { window.innerWidth <= 1000 ? null : <HexagonGrid margin={{ marginTop: -270 + "px" }} color={'#444'} /> }
	                <footer className="footer">2018 - designed and built by Raphael Mayer</footer>
	            </div>
	        </div>
	    );
	}
}

export default Frontpage;