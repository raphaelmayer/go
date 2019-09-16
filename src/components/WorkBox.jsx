import React from 'react';
import "./css/WorkBox.css";

const WorkBox = ({ p, i, onClick }) => {
    return(
        <div className="workbox" onClick={ e => onClick(p) } >
            <img className="workbox-img" alt="" src={`${process.env.PUBLIC_URL}/images/${p.thumbnail}`} />
            <p className="workbox-title">{ p.title }</p>
        </div>
    );
}

export default WorkBox;