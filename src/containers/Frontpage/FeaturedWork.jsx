import React from "react";
import "./css/FeaturedWork.css";

// alt: bool: alternate left < - > right
const FeaturedWork = ({ project, alt }) => {
	return (
		<div className="FeaturedWork">
			{ alt && <div className="text"></div> }
			<div className="image"><img src={ `/images/${project.images[0]}` } /></div>
			{ !alt && <div className="text"></div> }
		</div>
	);
}

export default FeaturedWork;