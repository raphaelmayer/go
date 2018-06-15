import React from 'react';
import './css/Nav.css';

const Nav = (props) => {

	return (
		<div className='nav'>
			<i className='far fa-gem'></i>

			<div className='nav-btn' props='0' onClick={ (e) => smoothScroll(e) } >
				<i className='far fa-circle' props='0'></i>
				<div className='nav-btn-text' props='0'> Home </div>
			</div>
			<div className='nav-btn' props='1' onClick={ (e) => smoothScroll(e) } >
				<i className='far fa-circle'props='1'></i>
				<div className='nav-btn-text' props='1'> Services I Offer </div>
			</div>
			<div className='nav-btn' props='2' onClick={ (e) => smoothScroll(e) } >
				<i className='far fa-circle'props='2'></i>
				<div className='nav-btn-text' props='2'> About Me </div>
			</div>
			<div className='nav-btn' props='3' onClick={ (e) => smoothScroll(e) } >
				<i className='far fa-circle'props='3'></i>
				<div className='nav-btn-text' props='3'> Featured Work </div>
			</div>
			<div className='nav-btn' props='4' onClick={ (e) => smoothScroll(e) } >
				<i className='far fa-circle'props='4'></i>
				<div className='nav-btn-text' props='4'> Get In Touch </div>
			</div>
			<div className='nav-btn' props='5' onClick={ (e) => smoothScroll(e) } >
				<i className='far fa-circle'props='5'></i>
				<div className='nav-btn-text' props='5'> placeholder </div>
			</div>

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