import React from 'react';
import './css/Overlay.css';
import NavBarIcon from "../components/NavBarIcon";

const Overlay = ({ p, visible, handleOverlay }) => {
	if (p) {
		return(
        	<div className="overlay" style={ visible ? { transform: "translateX(0)", opacity: 1, visibility: "visible" } : null }>
                <NavBarIcon onClick={ handleOverlay } transform={ true } />
        		<div className="overlay-text-box">
                    <h2>{ p.title }</h2>
                    <p><em>{ p.tagline }</em></p>
                    <h3>Main Features</h3>
                    <p>{ p.features && p.features.map((f, i) => <li key={ i }> { f } </li>) }</p>
                    <h3>Details</h3>
                    <p>{ p.description }</p>
                    { p.link && <a href={ p.link } target="_blank" rel="noopener noreferrer"><button className="overlay-btn">View live</button></a> }
                    { p.repo && <a href={ p.repo } target="_blank" rel="noopener noreferrer"><button className="overlay-btn">View repository</button></a> }
                </div>
                <div className="overlay-img-box">
                    {
                        p.images &&        // dont render preview image ([0])
                        p.images.map((img, i) => /* i === 0 ? null : */ <img className="overlay-img" alt="p-img" src={ `${process.env.PUBLIC_URL}/images/${img}` } />)
                    }
                </div>
            </div>
		)
	}
    return(
        <div className="overlay">error</div>
    );
}

export default Overlay;