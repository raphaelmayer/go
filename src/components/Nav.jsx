import React from 'react';
import './css/Nav.css';

// import Logo from "./Logo";
import SocialMediaIcons from './SocialMediaIcons';
import smoothScroll from "../helpers/smoothScroll";

const sections = [ "Home", "Work", "Contact" ];

const Nav = ({ className, bg, handleMobileNav }) => {
	const style = {
		backgroundColor: "rgb(28, 28, 28)",
		padding: window.innerWidth <= 800 ? "6vh 5vw" : "1vh 5vw",
		boxShadow: "0px 0px 6px 1px #111"
	};
	return (
		<nav className={ className } style={ bg ? style : {} } >
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