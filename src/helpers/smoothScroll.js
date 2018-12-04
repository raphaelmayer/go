const smoothScroll = (e) => {	
	console.log(e.target);
	const key = e.target.attributes.props.value;
	const element = document.getElementById(key);
	
	// not well supported though
	element.scrollIntoView({ behavior: 'smooth' });
}

export default smoothScroll;