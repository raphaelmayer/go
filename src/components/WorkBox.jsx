import React from 'react';
import "./css/WorkBox.css";

const WorkBox = ({ p, i, onClick }) => {
    return(
        <div className="work-box" onClick={ e => onClick(p) }>
            <div className="work-box-img" alt="" style={{ backgroundImage: `url("/images/${p.images[0]}")` }}></div>
            <p className="work-box-title" style={{ background: makeBlue(i) }} >{ p.title }</p>
        </div>
    );
}

export default WorkBox;

const makeBlue = i => {
	const arr = ["#112222", "#113333", "#114444", "#115555", "#116666", "#117777", "#115555", "#114444", "#113333", "#112222"];
	return arr[i] || "azure";
}