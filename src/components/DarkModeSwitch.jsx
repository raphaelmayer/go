import React from "react";
import "./css/DarkModeSwitch.css";

const DarkModeSwitch = ({ themeMode, toggleDarkMode }) => {
	const isChecked = themeMode === "light" ? true : false;
	return (
		<label className="switch">
			<i className="fas fa-sun"></i>
			<i className="fas fa-moon"></i>
		  <input type="checkbox" onChange={ toggleDarkMode } checked={ isChecked } />
		  <span className="slider round"></span>
		</label>
	);
}

export default DarkModeSwitch;