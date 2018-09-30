import React from 'react';
import './css/Overlay.css';

export const Overlay = (props) => {
	const { p, visible } = props;
	if (visible && p) {
		return(
        	<div className="overlay" style={{ transform: "translateX(0)", opacity: 1, visibility: "visible" }}>
        		<i className="far fa-circle" onClick={ props.handleOverlay }></i>
        		<div className="overlay-text-box">
                    <h2>{ p.title }</h2>
                    <p><em>{ p.tagline }</em></p>
                    <h3>Main Features</h3>
                    <p>{ p.features.map((f, i) => <li key={ i }> { f } </li>) }</p>
                    <h3>Details</h3>
                    <p>{ p.description }</p>
                    <a href={ p.link }><button className="overlay-btn">View live</button></a>
                </div>
                <div className="overlay-img-box">
                    {
                        p.images.map((img, i) => i === 0 ? null : <img className="overlay-img" alt="p-img" src={ `./images/${img}` } />)
                    }
                </div>
            </div>
		)
	}
	else if (p) {
		return(
        	<div className="overlay">
        		<i className="far fa-circle" onClick={ props.handleOverlay }></i>
                <div className="overlay-text-box">
                    <h2>{ p.title }</h2>
                    <p>{ p.tagline }</p>
                    <h3>Main Features</h3>
                    <p>{ p.features.map((f, i) => <li key={ i }> { f } </li>) }</p>
                    <h3>Details</h3>
                    <p>{ p.description }</p>
                    <a href={ p.link }><button className="overlay-btn">View live</button></a>
                </div>
                <div className="overlay-img-box">
                    {
                        p.images.map((img, i) => i === 0 ? null : <img alt="p-img" src={ `./images/${img}` } />)
                    }
                </div>
        	</div>
		)
	}
    return(
        <div className="overlay"></div>
    );
}

export default Overlay;