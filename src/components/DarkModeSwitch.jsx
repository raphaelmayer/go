import React from "react";
import "./css/DarkModeSwitch.css";

const DarkModeSwitch = ({ toggleDarkMode }) => {
	return (
		<label className="switch">
			<i className="fas fa-sun"></i>
			<i className="fas fa-moon"></i>
		  <input type="checkbox" onChange={ toggleDarkMode } />
		  <span className="slider round"></span>
		</label>
	);
}

export default DarkModeSwitch;