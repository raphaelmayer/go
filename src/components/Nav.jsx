import React from 'react';
import './css/Nav.css';

// import Logo from "./Logo";
import SocialMediaIcons from './SocialMediaIcons';
import DarkModeSwitch from "./DarkModeSwitch";
import smoothScroll from "../helpers/smoothScroll";

const sections = [ "Home", "Work", "Contact" ];

const Nav = ({ className, bg, handleMobileNav, themeMode, toggleDarkMode }) => {
	const style = { // used for scroll anim
		backgroundColor: themeMode === "dark" ? "rgb(28, 28, 28)" : "#eee",
		padding: window.innerWidth <= 800 ? "6vh 5vw" : "1vh 5vw",
		boxShadow: "0px 0px 6px 1px #111"
	};
	return (
		<nav className={ className + " " + themeMode } style={ bg ? style : {} } >
			<div className="nav-btns-container">
				{ sections.map((data, i) => <NavBtn text={ data } nbr={i} key={i} onClick={ e => {smoothScroll(e);handleMobileNav();} } /> ) }
			</div>
			<SocialMediaIcons />
			<DarkModeSwitch toggleDarkMode={ toggleDarkMode } />
		</nav>
	);
}

export default Nav;

const NavBtn = ({ text, onClick, nbr }) => {
	return (
		<div props={ text } className={`nav-btn btn${nbr}`} onClick={ onClick } >
			<div props={ text } className='nav-btn-text'> { text } </div>
			<div props={ text } className="nav-btn-border"></div>
		</div>
	);
}