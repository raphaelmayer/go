import React from 'react';
import './css/Nav.css';

import smoothScroll from "../helpers/smoothScroll";

const sections = [
	"Home",
	"About Me",
	"Services I Offer",
	"Featured Work",
	"Get in Touch" 
];

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
const Nav = (props) => {
console.log(window.innerWidth);
	return (
		<div className={ props.className }>
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
			<a href="https://github.com/attiimaster" target="_blank" rel="noopener noreferrer" ><i className='fab fa-github'></i></a>
			<a href="https://www.linkedin.com/in/raphael-mayer" target="_blank" rel="noopener noreferrer" ><i className='fab fa-linkedin'></i></a>
		</div>
	);
}

export default Nav;