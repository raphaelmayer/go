import React from 'react';
import './css/Nav.css';

import SocialMediaIcons from './SocialMediaIcons';
import smoothScroll from "../helpers/smoothScroll";

const sections = [
	"Home",
	"About Me",
	//"Services I Offer",
	"Featured Work",
	"Get in Touch" 
];

const Nav = ({ className }) => {
	return (
		<nav className={ className }>
			<div className="nav-logo-container"><Logo /></div>
			<div className="nav-btns-container">
				{ sections.map((str, i) => {
					return (
						<div className='nav-btn' props={i} key={i} onClick={ (e) => smoothScroll(e) } >
							<i className='far fa-circle' props={ i }></i>
							<div className='nav-btn-text' props={ i }> { str } </div>
						</div>
					);
				}) }
			</div>	
				
			<div className='border'></div>
			<SocialMediaIcons />
		</nav>
	);
}

export default Nav;

const Logo = () => {
	return (
		<div className="Logo">
			<div>RM</div>
		</div>
	);
}