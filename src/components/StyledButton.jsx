import React from "react";
import smoothScroll from "../helpers/smoothScroll";

const StyledButton = ({ text, scrollTo }) => {
	// props für link
	return (
		<button props={ scrollTo } onClick={ (e) => smoothScroll(e) } className="StyledButton">{ text || "Contact" }</button>
	);
}

export default StyledButton;