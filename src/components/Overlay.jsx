import React from 'react';
import './css/Overlay.css';

export const Overlay = (props) => {
	const { p, visible } = props;
	if (visible && p) {
		return(
        	<div className="overlay" style={{ width: 100 + "%", opacity: 1, visibility: "visible" }}>
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
                    <img alt="p-img" src={ "./images/" + p.images[1] }></img>
                    <div className="light-border"></div>
                    <div className="overlay-img-pre">{ p.images.map((img, i) => <img alt="p-img" src={ "./images/" + img }></img>) }</div>
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
                    <img alt="p-img" src={ "./images/" + p.images[1] }></img>
                    <div className="light-border"></div>
                    <div className="overlay-img-pre">{ p.images.map((img, i) => <img alt="p-img" src={ "./images/" + img }></img>) }</div>
                </div>
        	</div>
		)
	}
    return(
        <div className="overlay"></div>
    );
}

export default Overlay;