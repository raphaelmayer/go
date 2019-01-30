import React from "react";

import Head from './Head';
import About from './About';
import Services from './Services';
import Work from "./Work";
import Contact from './Contact';

const Frontpage = ({ handleOverlay, isHidden }) => {
	return (
	    <div className={`FrontPage ${isHidden && "FrontPage-hidden"}`}>

	        <div>
	            <Head />
			</div>
	
	            {/*<Services />*/}
			
	        	<Work handleOverlay={ handleOverlay } />
	
	            <About />

	            <Contact />
	            <footer className="footer">{ new Date().getFullYear() } - designed and built by Raphael Mayer</footer>
	    </div>
	);
}

export default Frontpage;