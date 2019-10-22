import React from 'react';
import './css/Overlayy.css';
import NavBarIcon from "../components/NavBarIcon";

const Overlay = ({ p, visible, handleOverlay, themeMode }) => {

	if (p) {
		return(
        	<div className={ `overlay ${themeMode} ${visible && "overlay-active"}` }>
                <NavBarIcon onClick={ handleOverlay } transform={ true } />
        		<div className="overlay-bg" onClick={ e => handleOverlay(e) }></div>
                <div className="overlay-container">
                    <div className="overlay-head" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${p.thumbnail})` }}>
                        <div className="darken-bg"></div>
                        <h1>{ p.title.toLowerCase() }</h1>
                    </div>

                    <div className="overlay-section">
                        <div className="tech">
                            { p.tech.map((t, i) => <button>{ t } </button>) }
                        </div>
                    </div>

                    <div className="overlay-section">
                        <p><em>{ p.tagline }</em></p>
                        <h3>in a nutshell</h3>
                        <ul>
                        { p.features && p.features.map((f, i) => <li>{ "> " + f }</li>) }
                        </ul>
                    </div>
                    { p.link && <Button src={ p.link } text={ "demo" } /> }
                    { p.repo && <Button src={ p.repo } text={ "source" } /> }
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
            <button className="overlay-btn">
                <i className={ text === "demo" ? "fas fa-eye" : "fas fa-code" }></i>
                { text }
            </button>
         </a>
    );
}