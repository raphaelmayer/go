import React from 'react';
import './css/Nav.css';

const sections = [
	"Home",
	"Services I Offer",
	"About Me",
	"Featured Work",
	"Get in Touch" 
];

const Nav = (props) => {

	return (
		<div className='nav'>
			<i className='far fa-gem'></i>

			{ sections.map((str, i) => {
				return (
					<div className='nav-btn' props={ i } onClick={ (e) => smoothScroll(e) } >
						<i className='far fa-circle' props={ i }></i>
						<div className='nav-btn-text' props={ i }> { str } </div>
					</div>
				);
			}) }
			
			<div className='border'></div>
			<a href="https://github.com/attiimaster" target="_blank" rel="noopener noreferrer" ><i className='fab fa-github'></i></a>
			<a href="https://www.linkedin.com/in/raphael-mayer" target="_blank" rel="noopener noreferrer" ><i className='fab fa-linkedin'></i></a>
		</div>
	);
}

export default Nav;

function smoothScroll(e) {	// not well supported though
	const key = e.target.attributes.props.value;
	const element = document.getElementById(key);

	element.scrollIntoView({ behavior: 'smooth' });
}