import React from "react";
import "./css/Parallax.css";

import "../helpers/fluid.js";

const Parallax = () => {
	setTimeout(startCanvasAnim, 60);
	return (
		<div className="parallax">
	    	<canvas id="c"></canvas>
	    </div>
    );
}

export default Parallax;

const startCanvasAnim = () => {        
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	window.Fluid.initialize();
}
