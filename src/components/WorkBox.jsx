import React from 'react';
import "./css/WorkBox.css";

const WorkBox = ({ p, i, onClick }) => {
    return(
        <div className="work-box" onClick={ e => onClick(p) }>
            <img className="work-box-img" alt="" src={`${process.env.PUBLIC_URL}/images/${p.images[0]}`} />
            <p className="work-box-title" style={{ background: `linear-gradient(to right, ${makeBlue(i)}, ${makeBlue(i+1)})` }} >{ p.title }</p>
        </div>
    );
}

export default WorkBox;

const makeBlue = i => {
	const arr = ["#112222", "#113333", "#114444", "#115555", "#116666", "#117777", "#115555", "#114444", "#113333", "#112222"];
	return arr[i] || "#115555";
}