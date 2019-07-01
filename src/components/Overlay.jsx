import React from 'react';
import './css/Overlay.css';
import NavBarIcon from "../components/NavBarIcon";

const Overlay = ({ p, visible, handleOverlay }) => {
	if (p) {
		return(
        	<div className={ visible ? "overlay overlay-active" : "overlay" }>
                <NavBarIcon onClick={ handleOverlay } transform={ true } />
        		<div className="overlay-container">

                    <div className="overlay-head" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${p.thumbnail})` }}>
                        <div className="darken-bg"></div>
                        <h1>{ p.title.toLowerCase() }</h1><p>
                        <em>{ p.tagline }</em></p>
                        <br/>
                        { p.link && <Button src={ p.link } text={ "demo" } /> }
                        { p.repo ? <Button src={ p.repo } text={ "source" } /> : <Button src={ p.repo } text={ "source unavailable" } /> }
                    </div>

                    <div className="overlay-section">
                        <h3>in a nutshell</h3>
                        <ul>
                        { p.features && p.features.map((f, i) => <li>{ "> " + f }</li>) }
                        </ul>
                    </div>
                    <div className="overlay-section">
                        <h3>tech</h3>
                        <ul className="tech">
                            { p.tech.map((t, i) => <li>{ t } </li>) }
                        </ul>
                    </div>

                    <div className="overlay-image-container">
                    {
                        p.images &&
                        p.images.map((img, i) => <img className="overlay-img" 
                                                      alt="p-img" 
                                                      src={ `${process.env.PUBLIC_URL}/images/${img}` } />)
                    }
                    </div>
                </div>
            </div>
		)
	}
    return(
        <div className="overlay">error</div>
    );
}

export default Overlay;

const Button = ({ src, text }) => {
    return (
         <a href={ src === "" ? null : src } target="_blank" rel="noopener noreferrer">
            <button className={ text === "source unavailable" ? "overlay-btn grey" : "overlay-btn" }>{ text }</button>
         </a>
    );
}