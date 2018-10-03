const smoothScroll = (e) => {	// not well supported though
	const key = e.target.attributes.props.value;
	const element = document.getElementById(key);

	element.scrollIntoView({ behavior: 'smooth' });
	//element.className += " appear";
}

export default smoothScroll;