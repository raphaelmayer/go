import React, { Component } from "react";
import "./css/Parallax.css";

import "../helpers/fluid.js";

class Parallax extends Component {

	componentDidMount() {
		setTimeout(startCanvasAnim, 60);
	}
	
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="parallax">
		    	<canvas id="c"></canvas>
		    </div>
	    );
	}
}

export default Parallax;

const startCanvasAnim = () => {        
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	window.Fluid.initialize();
}
