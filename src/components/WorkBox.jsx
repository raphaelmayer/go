import React from 'react';
import "./css/WorkBox.css";

const WorkBox = ({ p, i, onClick }) => {
    return(
        <div className="workbox" onClick={ e => onClick(p) } >
            <img className="workbox-img" alt="" src={`${process.env.PUBLIC_URL}/images/${p.images[0]}`} />
            <p className="workbox-title" style={{ background: `linear-gradient(to right, ${makeBlue(i)}, ${makeBlue(i+2)})` }} >{ p.title }</p>
        </div>
    );
}

export default WorkBox;

const makeBlue = i => {
	i = i < 10 ? i : i.toString().split("")[1];
	const arr = [
		"#112222",
		"#113333",
		"#114444",
		"#115555",
		"#116666",
		"#117777",
		"#115555",
		"#114444",
		"#113333",
		"#112222"
	];
	return arr[i] || "#115555";
}