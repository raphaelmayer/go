import React from "react";

import Head from './Head';
import About from './About';
import Services from './Services';
import Work from "./Work";
import Contact from './Contact';

const Frontpage = ({ handleOverlay, isHidden, themeMode }) => {
	return (
	    <div className={`FrontPage ${isHidden && "FrontPage-hidden"}`}>

	        <div>
	            <Head themeMode={ themeMode } />
			</div>
	
	            {/*<Services />*/}
			
	        	<Work handleOverlay={ handleOverlay } themeMode={ themeMode } />
	
	            <About themeMode={ themeMode } />

	            <Contact themeMode={ themeMode } />
	            <footer className={ "footer " + themeMode }>{ new Date().getFullYear() } - designed and built by Raphael Mayer</footer>
	    </div>
	);
}

export default Frontpage;