import React from 'react';
import './css/Nav.css';

import SocialMediaIcons from './SocialMediaIcons';
import smoothScroll from "../helpers/smoothScroll";

const sections = [
	"Home",
	"About Me",
	"Services I Offer",
	"Featured Work",
	"Get in Touch" 
];
// andersch glöst daweil
/*
const MobileNav = () => {
	return (
		<div></div>
	);
}
const DesktopNav = () => {
	return (
		<div></div>
	);
}
*/
const Nav = (props) => {
console.log(window.innerWidth);
	return (
		<nav className={ props.className }>
			<i className='far fa-gem'></i>

			<div className="nav-btns-container">
				{ sections.map((str, i) => {
					return (
						<div className='nav-btn' props={ i } onClick={ (e) => smoothScroll(e) } >
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