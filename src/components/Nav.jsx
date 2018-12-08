import React from 'react';
import './css/Nav.css';

// import Logo from "./Logo";
import SocialMediaIcons from './SocialMediaIcons';
import smoothScroll from "../helpers/smoothScroll";

const sections = [ "Home", "Work", "Contact" ];

const Nav = ({ className, bg, handleMobileNav }) => {
	return (
		<nav className={ className } style={ bg ? { backgroundColor: "rgb(28, 28, 28)", padding: "1vh 5vw"} : {} } >
			<div className="nav-btns-container">
				{ sections.map((data, i) => <NavBtn text={ data } key={i} onClick={ e => {smoothScroll(e);handleMobileNav();} } /> ) }
			</div>
			<SocialMediaIcons />
		</nav>
	);
}

export default Nav;

const NavBtn = ({ text, onClick }) => {
	return (
		<div props={ text } className='nav-btn' onClick={ onClick } >
			<div props={ text } className='nav-btn-text'> { text } </div>
			<div props={ text } className="nav-btn-border"></div>
		</div>
	);
}