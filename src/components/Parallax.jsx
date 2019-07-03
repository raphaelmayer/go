import React, { Component } from "react";
import "./css/Parallax.css";

import "../helpers/fluid.js";

class Parallax extends Component {

	componentDidMount() {
		setTimeout(() => startCanvasAnim(this.props.themeMode), 60);
	}

	componentDidUpdate() {
		window.cancelAnimationFrame(window.Fluid.animId);
		setTimeout(() => startCanvasAnim(this.props.themeMode), 60);
	}
	
	shouldComponentUpdate(newProps) {
		// only rerender, if revieving new theme
		if (newProps.themeMode === this.props.themeMode) return false;
		return true;
	}

	render() {
		const { themeMode } = this.props;
		return (
			<div className="parallax">
		    	<canvas id="c"></canvas>
		    </div>
	    );
	}
}

export default Parallax;

const startCanvasAnim = (themeMode) => {        
	// window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	window.Fluid.initialize(themeMode);
}
